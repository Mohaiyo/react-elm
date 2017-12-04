import React from 'react'
import HeaderTop from 'components/header/HeaderTop.jsx'
import AlertTip from 'components/common/AlertTip.jsx'
import { Link } from 'react-router-dom'
import {mobileCode, checkExsis, sendLogin, getcaptchas, accountLogin} from 'services/getData'

class Login extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			loginWay: false, //登录方式，默认密码登录
			showPassword: false, // 是否显示密码
			phoneNumber: '', //电话号码
			mobileCode: '', //短信验证码
			validate_token: '', //获取短信时返回的验证值，登录时需要
			computedTime: 0, //倒数记时
			userInfo: '', //获取到的用户信息
			userAccount: '', //用户名
			passWord: '', //密码
			captchaCodeImg: '', //验证码地址
			codeNumber: '', //验证码
			showAlert: false, //显示提示组件
			alertText: '', //提示的内容
		}
		this.back = this.back.bind(this)
		this.handlePnumChange = this.handlePnumChange.bind(this)
		this.handleMobileCodeChange = this.handleMobileCodeChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.changePassWordType = this.changePassWordType.bind(this)
		this.getCaptchaCode = this.getCaptchaCode.bind(this)
		this.mobileLogin = this.mobileLogin.bind(this)
		this.userAccountHandler = this.userAccountHandler.bind(this)
		this.passWordHandler = this.passWordHandler.bind(this)
		this.codeNumberHandler = this.codeNumberHandler.bind(this)
		this.closeTip = this.closeTip.bind(this)
		this.getVerifyCode = this.getVerifyCode.bind(this)
	}
	componentDidMount() {
		this.getCaptchaCode()
	}
	rightPhoneNumber(){
	    return /^1\d{10}$/gi.test(this.state.phoneNumber)
	}
	back(){
		this.props.history.go(-1)
	}
	handlePnumChange(event){
		this.setState({phoneNumber: event.target.value});
	}
	handleMobileCodeChange(event){
		this.setState({mobileCode: event.target.value});
	}
	handleSubmit(event) {
	    event.preventDefault();
	}
	changePassWordType(){
		this.setState({
			showPassword: !this.state.showPassword
		})
	}
	userAccountHandler(event){
		this.setState({
			userAccount: event.target.value
		})
	}
	passWordHandler(event){
		this.setState({
			passWord: event.target.value
		})
	}
	codeNumberHandler(event){
		this.setState({
			codeNumber: event.target.value
		})
	}
	async getCaptchaCode(){
		let res = await getcaptchas()
		this.setState({
			captchaCodeImg:res.code
		})
	}
	async getVerifyCode(){
	    if (this.rightPhoneNumber()) {
	    	this.setState({
	    		computedTime: 30
	    	})
	        let timer = setInterval(() => {
	        	this.setState({
	        		computedTime:this.state.computedTime --
	        	})
	            if (this.state.computedTime == 0) {
	                clearInterval(timer)
	            }
	        }, 1000)
	        //判读用户是否存在
	        let exsis = await checkExsis(this.state.phoneNumber, 'mobile');
	        if (exsis.message) {
	        	this.setState({
	        		showAlert:true,
	        		alertText:exsis.message
	        	})
	            return
	        }else if(!exsis.is_exists) {
	        	this.setState({
	        		showAlert: true,
	        		alertText: '您输入的手机号尚未绑定'
	        	})
	            return
	        }
	        //发送短信验证码
	        let res = await mobileCode(this.state.phoneNumber);
	        if (res.message) {
	        	this.setState({
	        		showAlert: true,
	        		alertText: res.message
	        	})
	            return
	        }
	        this.setState({
	        	validate_token: res.validate_token
	        })
	    }
	}
	//发送登录信息
	async mobileLogin(){
	    if (this.state.loginWay) {
	        if (!this.rightPhoneNumber()) {
	        	this.setState({
	        		showAlert: true,
	        		alertText: '手机号码不正确'
	        	})
	            return
	        }else if(!(/^\d{6}$/gi.test(this.mobileCode))){
	        	this.setState({
	        		showAlert: true,
	        		alertText: '短信验证码不正确'
	        	})
	            return
	        }
	        //手机号登录
	        this.state.userInfo = await sendLogin(this.state.mobileCode, this.state.phoneNumber, this.state.validate_token);
	    }else{
	        if (!this.state.userAccount) {
	        	this.setState({
	        		showAlert: true,
	        		alertText: '请输入手机号/邮箱/用户名'
	        	})
	            return
	        }else if(!this.state.passWord){
	        	this.setState({
	        		showAlert: true,
	        		alertText: '请输入密码'
	        	})
	            return
	        }else if(!this.state.codeNumber){
	        	this.setState({
	        		showAlert: true,
	        		alertText: '请输入验证码'
	        	})
	        }
	        //用户名登录
	        this.state.userInfo = await accountLogin(this.state.userAccount, this.state.passWord, this.state.codeNumber);
	    }
	    //如果返回的值不正确，则弹出提示框，返回的值正确则返回上一页
	    if (!this.state.userInfo.user_id) {
	    	this.setState({
	    		showAlert: true,
	    		alertText:this.state.userInfo.message
	    	})
	        if (!this.state.loginWay) {
	        	this.getCaptchaCode()
	        }
	    }else{
	    	// 需要用到redux来管理
	        // this.RECORD_USERINFO(this.state.userInfo);
	        this.props.history.go(-1);

	    }
	}
	closeTip(){
		this.setState({
			showAlert: false
		})
	}
	render(){
		return(
			<div className="loginContainer">
				<HeaderTop headTitle={this.state.loginWay? '登录' : '登录密码'} goBack={this.back}/>
				{
					this.state.loginWay 
					? 
					(<form className="loginForm" onSubmit={this.handleSubmit}>
						<section className="input_container phone_number">
						    <input type="text" placeholder="账号密码随便输入" name="phone" maxLength="11" value={this.state.phoneNumber} onChange={this.handlePnumChange} required/>
						    {!this.state.computedTime ? <button onClick={ this.getVerifyCode } className={this.rightPhoneNumber() ? 'right_phone_number' : ''}>获取验证码</button> : '' }
						    {this.state.computedTime ? <button>已发送({this.state.computedTime}s)</button> : ''}
						</section>
						<section className="input_container">
						    <input type="text" placeholder="验证码" name="mobileCode" maxLength="6" value={ this.state.mobileCode } onChange={this.handleMobileCodeChange}/>
						</section>
					</form>)
					:
					(<form className="loginForm" onSubmit={this.handleSubmit}>
						<section className="input_container">
						    <input type="text" placeholder="账号" maxLength="11" value={this.state.userAccount} onChange = {this.userAccountHandler}/>
						</section>
						<section className="input_container">
							{ !this.state.showPassword ? (<input type="password" placeholder="密码" maxLength="15" value ={this.state.passWord} onChange = {this.passWordHandler}/>) : (<input type="text" placeholder="密码" maxLength="15"  value={this.state.passWord} onChange = {this.passWordHandler}/>) }
						    <div className={this.state.showPassword ? 'button_switch change_to_text' : 'button_switch' }>
						        <div className={ this.state.showPassword ? 'trans_to_right circel_button' : 'circel_button'} onClick={this.changePassWordType}></div>
						        <span>abc</span>
						        <span>...</span>
						    </div>
						</section>
						<section className="input_container captcha_code_container">
						    <input type="text" placeholder="验证码" maxLength="4" value={this.state.codeNumber} onChange={this.codeNumberHandler}/>
						    <div className="img_change_img">
						        {this.state.captchaCodeImg ? <img src={this.state.captchaCodeImg} /> : ''}
						        <div className="change_img" onClick={this.getCaptchaCode}>
						            <p>看不清</p>
						            <p>换一张</p>
						        </div>
						    </div>
						</section>
					</form>)
				}
				<p className="login_tips">
				    温馨提示：未注册过的账号，登录时将自动注册<br/>
				    注册过的用户可凭账号密码登录
				</p>
				<img src="images/b.jpg" style={{width:'15rem',height:'7rem'}}/>
				<div className="login_container" onClick={this.mobileLogin}>登录</div>
				{!this.state.loginWay ? <Link to="/forget" className="to_forget">重置密码？</Link> : ''}
				{this.state.showAlert ? <AlertTip  showHide={this.state.showAlert} closeTip={this.closeTip} alertText={this.state.alertText} /> : ''}
			</div>
			)
	}
}
export default Login;