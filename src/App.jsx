/*
* @Author: Administrator
* @Date:   2017-09-19 22:54:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 16:24:50
*/
import React from 'react'
import { BrowserRouter as Router,Route,Link,Redirect } from 'react-router-dom'
import Home from 'containers/home/Home.jsx'
import City from 'containers/city/City.jsx'
import Msite from 'containers/msite/Msite.jsx'
import Login from 'containers/login/Login.jsx'
import Forget from 'containers/forget/Forget.jsx'
import Search from 'containers/search/Search.jsx'
import SvgIcon from 'components/common/svg'
//引入rem.js
import  './config/rem'
import 'style/app.scss'


class App extends React.Component{
	render(){
		return (
			<div>
				<Router>
					<div>
						{/*默认路由重定向到home*/}
						<Route  exact path='/' render={() => (<Redirect to="/home"/>)}/>
						<Route path='/home'  component={Home}/>
						<Route path='/city/:id'  component={City}/>
						<Route path='/msite'  component={Msite}/>
						<Route path='/login'  component={Login}/>
						<Route path='/forget'  component={Forget}/>
						<Route path='/search'  component={Search}/>
					</div>
				</Router>
				<SvgIcon />
			</div>
		)
	}
}
export default App;