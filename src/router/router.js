/*
* @Author: Administrator
* @Date:   2017-09-24 15:53:59
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 16:44:33
*/
import React from 'react';
// Browser history 是由 React Router 创建浏览器应用推荐的 history
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import App from "../app"
import Home from "../containers/home/home"

const routes =(
	<Router >
	  <Route exact  path="/" component={Home} />
	</Router>
)
export default routes;