import React from 'react'
import { Link } from 'react-router-dom'
class HeaderTop extends React.Component{
	constructor(props) {
	  super(props)
	  this.state = {
	  }
	  this.back = this.back.bind(this) 
	  this.reload = this.reload.bind(this) 
	}
	back(){
		this.props.goBack()
	}
	reload(){
		window.location.reload()
	}
	render() {
		const isLogo = this.props.isLogo
		const search = this.props.search
		const goBack = this.props.goBack
		const signinUp = this.props.signinUp
		const userInfo = this.props.userInfo
		const headTitle = this.props.headTitle
		const edit = this.props.edit
		const msiteTitle = this.props.msiteTitle
		const changecity = this.props.changecity
		const changeLogin = this.props.changeLogin
		const geohash = this.props.geohash
		return (
			<header id='head_top'>
				{isLogo ? (
					<div className="head_logo" onClick={this.reload}>ele.me</div>
					) : ''
				}
				{search ? (
					<Link to={'/search/'+geohash} className="link_search"><svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
	    			<circle cx="8" cy="8" r="7" stroke="rgb(255,255,255)" strokeWidth="1" fill="none"/>
	    			<line x1="14" y1="14" x2="20" y2="20" style={{stroke:'rgb(255,255,255)',strokeWidth:2}}/>
	    		</svg></Link>
					) : ''
				}
				{goBack ? (
					<section className='head_goback' onClick={this.back}>
						<svg style={{width:'100%',height:'100%'}} xmlns="http://www.w3.org/2000/svg" version="1.1">
						    <polyline points="12,18 4,9 12,0" style={{fill:'none',stroke:'rgb(255,255,255)',strokeWidth:2}}/>
						</svg>
					</section>
					) : ''
				}
				{signinUp? (
					<Link to={userInfo ? '/profile' : '/login'} className="head_login">
						{userInfo ? (<svg className="user_avatar">
						    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#user"></use>
						</svg>) : (<span className="login_span">登录|注册</span>)}
					</Link>
					) : ''
				}
				{ headTitle ? (
					<section className="title_head ellipsis">
						<span className="title_text">{ headTitle }</span>
					</section>	
					):''
				}
				{edit ?(<span></span>) :''}
				{msiteTitle ? (<Link to="/home" className="msite_title"><span className="title_text ellipsis">{msiteTitle}</span></Link>) :''}
				{changecity ? (<Link to="/home"><span className="change_city">切换城市</span></Link>) :''}
				{changeLogin ? (<span></span>) :''}
			</header>
		)
	}
}
export default HeaderTop;