
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import HeaderTop from 'components/header/HeaderTop.jsx'
import ShopList from 'components/common/ShopList.jsx'
import FootGuide from 'components/footer/FootGuide.jsx'
import {msiteAdress, msiteFoodTypes, cityGuess} from 'services/getData'
import Fl from 'images/fl.svg'

import 'src/plugins/swiper.min.js'
//这样导入样式居然没有效果，日狗了，解决方案，将css改成scss然后在app.scss中导入
// require('style/swiper.min.css')


/*actions*/
import * as msiteActions from 'src/store/action/action'

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state）， {return {...state.home, ...state.global}}（n个state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */
@connect(
	state => state,
	dispatch => bindActionCreators( msiteActions, dispatch)
)
class Msite extends React.Component{
	constructor(props) {
		super(props);
		console.log(this.props)
		this.state = {
			geohash: '', // city页面传递过来的地址geohash
		    msiteTitle: '请选择地址...', // msiet页面头部标题
		    foodTypes: [], // 食品分类列表
		    hasGetData: false, //是否已经获取地理位置数据，成功之后再获取商铺列表信息
		    imgBaseUrl: 'https://fuss10.elemecdn.com', //图片域名地址
		}
	}
	async componentDidMount() {
		if (!this.props.location.query.geohash) {
			const address = await cityGuess()
			this.setState({
				geohash: address.latitude + ',' + address.longitude
			})
		}else{
			this.setState({
				geohash:this.props.location.query.geohash
			})
		}
		//保存geohash 到redux ?
		this.props.saveGeohash(this.props.location.query.geohash)
		
		//获取位置信息
		let res = await msiteAdress(this.props.location.query.geohash)
		this.setState({
			msiteTitle:res.name
		})

    	// 记录当前经度纬度 到redux ?
    	this.props.recordAddress(res.latitude,res.longitude);

    	this.setState({
    		hasGetData: true
    	})
    	console.log(this.props)
	    //获取导航食品类型列表
	   	msiteFoodTypes(this.state.geohash).then(res => {
	   		let resLength = res.length
	   		let resArr = [...res] // 返回一个新的数组
	   		let foodArr = []
			for (let i = 0, j = 0; i < resLength; i += 8, j++) {
				foodArr[j] = resArr.splice(0, 8);   //splice会改变原来的数组
			}
			this.setState({
				foodTypes: foodArr
			})
	    }).then(() => {
	    	//初始化swiper
	    	new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: true
		    })
	    })

	}

	// 解码url地址，求去restaurant_category_id值
	getCategoryId(url){
		let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
		if (/restaurant_category_id/gi.test(urlData)) {
			return JSON.parse(urlData).restaurant_category_id.id
		}else{
			return ''
		}
	}
	render(){
		return (
			<div>
				<HeaderTop signinUp='msite' msiteTitle={this.state.msiteTitle} search={this.state.geohash}/>
		    	<nav className="msite_nav">
		    		{this.state.foodTypes.length ?
			    		(<div className="swiper-container">
					        <div className="swiper-wrapper">
					        	{
					        	this.state.foodTypes.map((item,index)=>
					        		<div className="swiper-slide food_types_container" key={index}>
					        			{ item.map( (foodItem,ind) => (
					        				<Link to={ '/food?geohash='+this.state.geohash+'&title='+foodItem.title+'&restaurant_category_id='+this.getCategoryId(foodItem.link) } key={foodItem.id} className="link_to_food">
						            			<figure>
						            				<img src={this.state.imgBaseUrl + foodItem.image_url} />
						            				<figcaption>{foodItem.title}</figcaption>
						            			</figure>
						            		</Link>)) }

					            	</div>)
					        	}
					        </div>
					        <div className="swiper-pagination"></div>
					    </div>) :
					    (<img src={Fl} className="fl_back animation_opactiy" />) 
					}
		    	</nav>
    	    	<div className="shop_list_container">
    		    	<header className="shop_header">
    		    		<svg className="shop_icon">
    		    			<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#shop"></use>
    		    		</svg>
    		    		<span className="shop_header_title">附近商家</span>
    		    	</header>
    		    	{this.state.hasGetData ? <ShopList geohash={this.state.geohash} /> : ''}
    	    	</div>
    	    	<FootGuide history = {this.props.history} geohash={this.state.geohash}/>
			</div>
			)
	}
}
export default Msite;