import React from 'react'
import HeaderTop from 'components/header/HeaderTop.jsx'
import AlertTip from 'components/common/AlertTip.jsx'
import {mobileCode, checkExsis, sendMobile, getcaptchas, changePassword} from 'services/getData'

class Forget extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '', //电话号码
            oldPassWord: '', //旧密码
            newPassWord: '', //新密码
            rightPhoneNumber: false, //输入的手机号码是否符合要求
            confirmPassWord: '', //确认密码
            captchaCodeImg: '', //验证码地址
            mobileCode: '', //短信验证码
            computedTime: 0, //倒数记时
            showAlert: false, //显示提示组件
            alertText: '', //提示的内容
            accountType: 'mobile' //注册方式
        }
        this.back = this.back.bind(this)
        this.inputPhone = this.inputPhone.bind(this)
        this.phoneHandler = this.phoneHandler.bind(this)
        this.oldPassWordHandler = this.oldPassWordHandler.bind(this)
        this.newPassWordHandler = this.newPassWordHandler.bind(this)
        this.confirmPassWordHandler = this.confirmPassWordHandler.bind(this)
        this.mobileCodeHandler = this.mobileCodeHandler.bind(this)
        this.getCaptchaCode = this.getCaptchaCode.bind(this)
        this.resetButton = this.resetButton.bind(this)
        this.closeTip = this.closeTip.bind(this)
    }
    componentDidMount() {
        this.getCaptchaCode()
    }
    // 判断输入的电话号码
    inputPhone(){
        if(/.+/gi.test(this.state.phoneNumber)){
            this.setState({
                rightPhoneNumber:true
            })
        }else{
            this.setState({
                rightPhoneNumber: false,
                showAlert: true,
                alertText: '手机号码不正确'
            })
        }
    }
    phoneHandler(event){
        this.setState({
            phoneNumber: event.target.value
        })
        // this.inputPhone()
    }
    oldPassWordHandler(event){
        this.setState({
            oldPassWord: event.target.value
        })
    }
    newPassWordHandler(event){
        this.setState({
            newPassWord: event.target.value
        })
    }
    confirmPassWordHandler(event){
        this.setState({
            confirmPassWord: event.target.value
        })
    }
    mobileCodeHandler(event){
        this.setState({
            mobileCode: event.target.value
        })
    }
    //获取验证吗
    // async getVerifyCode(){
    //     if (this.rightPhoneNumber) {
    //         this.computedTime = 30;
    //         //倒计时
    //         this.timer = setInterval(() => {
    //             this.computedTime --;
    //             if (this.computedTime == 0) {
    //                 clearInterval(this.timer)
    //             }
    //         }, 1000)
    //         //判断用户是否存在
    //         let res = await checkExsis(this.phoneNumber, this.accountType);
    //         //判断返回的信息是否正确，用户是否注册
    //         if (res.message) {
    //             this.showAlert = true;
    //             this.alertText = res.message;
    //             return
    //         }else if(!res.is_exists) {
    //             this.showAlert = true;
    //             this.alertText = '您输入的手机号尚未绑定';
    //             return
    //         }
    //         //获取验证信息
    //         let getCode = await mobileCode(this.phoneNumber);
    //         if (getCode.message) {
    //             this.showAlert = true;
    //             this.alertText = getCode.message;
    //             return
    //         }
    //         this.validate_token = getCode.validate_token;
    //     }
    // }
     async getCaptchaCode(){
        let res = await getcaptchas()
        this.setState({
            captchaCodeImg: res.code
        })
    }
    //重置密码
    async resetButton(){
        if (!this.state.phoneNumber) {
            this.setState({
                showAlert: true,
                alertText: '请输入正确的账号'
            })
            return
        }else if(!this.state.oldPassWord){
            this.setState({
                showAlert: true,
                alertText: '请输入旧密码'
            })
            return
        }else if(!this.state.newPassWord){
            this.setState({
                showAlert: true,
                alertText: '请输入新密码'
            })
            return
        }else if(!this.state.confirmPassWord){
            this.setState({
                showAlert: true,
                alertText: '请输确认密码'
            })
            return
        }else if(this.state.newPassWord !== this.state.confirmPassWord){
            this.setState({
                showAlert: true,
                alertText: '两次输入的密码不一致'
            })
            return
        }else if(!this.state.mobileCode){
            this.setState({
                showAlert: true,
                alertText: '请输验证码'
            })
            return
        }
        // 发送重置信息
        let res = await changePassword(this.state.phoneNumber, this.state.oldPassWord, this.state.newPassWord, this.state.confirmPassWord, this.state.mobileCode);
        if (res.message) {
            this.setState({
                showAlert: true,
                alertText: res.message
            })
            this.getCaptchaCode()
            return
        }else{
            this.setState({
                showAlert: true,
                alertText: '密码修改成功'
            })
        }
    }
    closeTip(){
        this.setState({
            showAlert:false
        })
    }
    back(){
        this.props.history.go(-1)
    }
    render() {
        return(
            <div className="restContainer">
                <HeaderTop headTitle="重置密码"  goBack={this.back} />
                <form className="restForm">
                    <section className="input_container phone_number">
                        <input type="text" placeholder="账号" name="phone" maxLength="11" value={this.state.phoneNumber} onChange = {this.phoneHandler} />
                        {/*<button @click.prevent="getVerifyCode" :className="{right_phone_number:rightPhoneNumber}" v-show="!computedTime">获取验证码</button>
                        <button  @click.prevent v-show="computedTime">已发送({{computedTime}}s)</button> */}
                    </section>
                     <section className="input_container">
                        <input type="password" placeholder="旧密码" name="oldPassWord" value={this.state.oldPassWord} onChange={this.oldPassWordHandler} />
                    </section>
                    <section className="input_container">
                        <input type="password" placeholder="请输入新密码" name="newPassWord" value={this.state.newPassWord} onChange={this.newPassWordHandler} />
                    </section>
                    <section className="input_container">
                        <input type="password" placeholder="请确认密码" name="confirmPassWord" value= {this.state.confirmPassWord} onChange={this.confirmPassWordHandler} />
                    </section>
                    <section className="input_container captcha_code_container">
                        <input type="text" placeholder="验证码" name="mobileCode" maxLength="6" value={this.state.mobileCode} onChange={this.mobileCodeHandler} />
                        <div className="img_change_img">
                            {this.state.captchaCodeImg ? <img src={this.state.captchaCodeImg} /> : ''}
                            <div className="change_img" onClick={this.getCaptchaCode}>
                                <p>看不清</p>
                                <p>换一张</p>
                            </div>
                        </div>
                    </section>
                </form>
                <div className="login_container" onClick={this.resetButton}>确认修改</div>
                {this.state.showAlert ? <AlertTip showHide={this.state.showAlert} closeTip={this.closeTip} alertText={this.state.alertText} /> : ''}
            </div>
        )
    }
}
export default Forget;
