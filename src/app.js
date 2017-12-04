/*
* @Author: Administrator
* @Date:   2017-09-19 22:54:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 16:24:50
*/
import React from 'react';
import styles from 'style/app';
import 'style/common';
import 'style/mixin';
import { cityGuess,hotcity,groupcity } from './services/getData'

class App extends React.Component{
	constructor() {
	  super();
	  this.state = {
	    value: null,
	    guessCity:'',
	    guessCityid:''
	  };
	}
	componentWillMount() {
		// 获取当前城市
		cityGuess().then(res => {
		    this.guessCity = res.name;
		    this.guessCityid = res.id;
		})
		//获取热门城市
		hotcity().then(res => {
		    this.hotcity = res;
		})

		//获取所有城市
		groupcity().then(res => {
		    this.groupcity = res;
		})
	}

	componentDidMount() {
	}

	componentWillUnmount() {

	}
	render(){
		return (
			<div className={styles.app}>
				<h2>Hello,react </h2>
				<h5>现在让我们开始进行react项目开发吧</h5>
				<div>教你手把手搭建一个webpack-react工程化项目</div>
				<p>好像可以实现了哦，问你兴不兴奋?</p>
			</div>
			)
	}
}
export default App;