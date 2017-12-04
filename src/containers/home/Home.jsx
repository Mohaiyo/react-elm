/*
* @Author: Administrator
* @Date:   2017-09-19 22:54:33
* @Last Modified by:   Administrator
* @Last Modified time: 2017-09-24 16:24:50
*/
import React from 'react';
import HeaderTop from 'components/header/HeaderTop.jsx'
import { Link } from 'react-router-dom'
import { cityGuess,hotcity,groupcity } from 'services/getData'

class Home extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
		    guessCity:[],
		    guessCityid:[],
		    hotcity:[],
		    groupcity:[]
		};
		this.sortgroupcity = this.sortgroupcity.bind(this)
	}
    //将获取的数据按照A-Z字母开头排序,否则排列顺序为任意顺序
    sortgroupcity(){
        let sortobj = {};
        //65 - 90 26个大写英文字母
        for (let i = 65; i <= 90; i++) {
            if (this.state.groupcity[String.fromCharCode(i)]) {
                sortobj[String.fromCharCode(i)] = this.state.groupcity[String.fromCharCode(i)];
            }
        }
        return sortobj
    }
	componentDidMount() {
		// 获取当前城市
		cityGuess().then(res => {
			this.setState({
				guessCity: res.name,
				guessCityid: res.id
			})
		})
		//获取热门城市
		hotcity().then(res => {
			this.setState({
				hotcity: res
			})
		})

		//获取所有城市
		groupcity().then(res => {
			this.setState({
				groupcity: res
			})
		})
	}
	render(){
		const hotcity = this.state.hotcity
		const groupcity = this.state.groupcity
		return (
			<div>
				<HeaderTop isLogo={true} signinUp= {true} userInfo={false}/>
				<nav className="city_nav">
					<div className="city_tip">
						<span>当前定位城市：</span>
						<span>定位不准时，请在城市列表中选择</span>						
					</div>	
					<Link to={'/city/'+this.state.guessCityid} className="guess_city">
						<span>{this.state.guessCity}</span>
						<svg className="arrow_right">
						    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#arrow-right"></use>
						</svg>	
					</Link>					
				</nav>
				<section id="hot_city_container">
				    <h4 className="city_title">热门城市</h4>
				    <ul className="citylistul clear">
				        {hotcity.map((item,index)=> <Link to={'/city/'+item.id} key={item.id}><li>{item.name}</li></Link>)}  
				    </ul>
				</section>
				<section className="group_city_container">
				    <ul className="letter_classify">{
				    	Object.keys(this.sortgroupcity()).map((key,index)=>(
				    		<li className="letter_classify_li" key={index}>
				    		    <h4 className="city_title">{key}
				    		        {index === 0 ?<span>（按字母排序）</span> : ''}
				    		    </h4>
				    		    <ul className="groupcity_name_container citylistul clear">
				    		    {
				    		    	this.sortgroupcity()[key].map((item,index)=><Link to={'/city/'+item.id} key={item.id} ><li className="ellipsis">{item.name}</li></Link>)
				    		    }
				    		    </ul>
				    		</li>
				    	))}
				    </ul>
				</section>
			</div>
			)
	}
}
export default Home;