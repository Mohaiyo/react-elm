import React from 'react'
import {shopList} from 'services/getData'
import {showBack, animate} from 'src/config/mUtils'
import {loadMore, getImgPath} from './mixin'
import { Link } from 'react-router-dom'
import RatingStar from './RatingStar.jsx'
import Loading from './Loading.jsx'



class ShopList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			latitude:this.props.geohash.split(',')[0],  //自己先加的，后面需要用redux管理
			longitude: this.props.geohash.split(',')[1], //自己先加的，后面需要用redux管理
			offset: 0, // 批次加载店铺列表，每次加载20个 limit = 20
			shopListArr:[], // 店铺列表数据
			preventRepeatReuqest: false, //到达底部加载数据，防止重复加载
			showBackStatus: false, //显示返回顶部按钮
			showLoading: true, //显示加载动画
			touchend: false, //没有更多数据
			arrTen: [1,2,3,4,5,6,7,8,9,10],
			imgBaseUrl:'http://cangdu.org:8001/img/'
		}
	}
	componentDidMount() {
		//自己先加的，后面需要用redux管理
		this.initData()
	}
	async initData(){
		//获取数据
		let res = await shopList(this.state.latitude, this.state.longitude, this.state.offset, this.props.restaurantCategoryId);
		this.state.shopListArr = [...res]
		this.setState({
			shopListArr:this.state.shopListArr
		})
		if (res.length < 20) {
			this.setState({
				touchend: true
			})
		}
		this.hideLoading();
		//开始监听scrollTop的值，达到一定程度后显示返回顶部按钮
		showBack(status => {
			this.setState({
				showBackStatus:status
			})
		});
	}
	//到达底部加载更多数据
	async loaderMore(){
		if (this.state.touchend) {
			return
		}
		//防止重复请求
		if (this.state.preventRepeatReuqest) {
			return 
		}
		//数据的定位加20位
		this.state.offset += 20;
		this.setState({
			stateshowLoading:true,
			preventRepeatReuqest:true,
			offset:this.state.offset
		})

		// //数据的定位加20位
		// this.state.offset += 20;
		let res = await shopList(this.state.latitude, this.state.longitude, this.state.offset, this.props.restaurantCategoryId);
		this.hideLoading()

		this.state.shopListArr = [...this.shopListArr, ...res]

		this.setState({
			shopListArr:this.state.shopListArr,
			preventRepeatReuqest:false
		})
		//当获取数据小于20，说明没有更多数据，不需要再次请求数据
		if (res.length < 20) {
			this.setState({
				touchend:true
			})
			return
		}
		this.setState({

		})
		// this.preventRepeatReuqest = false;
	}
	//返回顶部
	backTop(){
		animate(document.body, {scrollTop: '0'}, 400,'ease-out');
	}
	//监听父级传来的数据发生变化时，触发此函数重新根据属性值获取数据
	async listenPropChange(){
		this.showLoading = true;
		this.offset = 0;
		let res = await shopList(this.latitude, this.longitude, this.offset, '', this.restaurantCategoryIds, this.sortByType, this.deliveryMode, this.supportIds);
		this.hideLoading();
		//考虑到本地模拟数据是引用类型，所以返回一个新的数组
		this.shopListArr = [...res];
	}
	//开发环境与编译环境loading隐藏方式不同
	hideLoading(){
		this.setState({
			showLoading:false
		})
	}
	zhunshi(supports){
		let zhunStatus;
		if ((supports instanceof Array) && supports.length) {
				supports.forEach(item => {
					if (item.icon_name === '准') {
						zhunStatus = true;
					}
				})
		}else{
			zhunStatus = false;
		}
		return zhunStatus
	}
	render() {
		const geohash = this.props.geohash
		return(
			<div className="shoplist_container">
				{ 
					this.state.shopListArr.length ? 
					(<ul>
					{/*ul应该有个到底部自动加载的方法，如何封装自定义指令，还是怎么实现？？？还是使用插件*/}
					{	this.state.shopListArr.map((item,index) =>
						(<Link to={ '/shop?geohash='+ geohash +'&id='+item.id } key={item.id} className="shop_li">
							<section>
								<img src={this.state.imgBaseUrl + item.image_path} className="shop_img" />
							</section>
							<hgroup className="shop_right">
								<header className="shop_detail_header">
									<h4 className={item.is_premium ? 'premium shop_title ellipsis' : 'shop_title ellipsis'}>{item.name}</h4>
									<ul className="shop_detail_ul">
										{item.supports.map((i,index) => <li key={i.id} className="supports">{i.icon_name}</li> )	}		
									</ul>
								</header>
								<h5 className="rating_order_num">
									<section className="rating_order_num_left">
										<section className="rating_section">
											{/*迷之尴尬  为啥ratingstar进不来？？？？？因为star你用了小写啊*/}
											<RatingStar  rating={ item.rating } />
											<span className="rating_num">{item.rating}</span>
										</section>
										<section className="order_section">
											月售{item.recent_order_num}单
										</section>
									</section>
									<section className="rating_order_num_right">
										{item.delivery_mode ? <span className="delivery_style delivery_left">{item.delivery_mode.text}</span> : ''}
										{this.zhunshi(item.supports) ? <span className="delivery_style delivery_right">准时达</span> : '' }
									</section>
								</h5>
								<h5 className="fee_distance">
									<p className="fee">
										¥{item.float_minimum_order_amount}起送 
										<span className="segmentation">/</span>
										{item.piecewise_agent_fee.tips}
									</p>
									<p className="distance_time">
										{Number(item.distance) ? <span>{item.distance > 1000 ? (item.distance/1000).toFixed(2) + 'km': item.distance + 'm'}
											<span className="segmentation">/</span>
										</span> : <span>{item.distance}</span>}
										
										<span className="segmentation">/</span>
										<span className="order_time">{item.order_lead_time}</span>
									</p>
								</h5>
							</hgroup>
						</Link>))
					}
					</ul>)
					:
					(<ul className="animation_opactiy">
					    {this.state.arrTen.map((item) => <li className="list_back_li" key={item}>
							<svg className="list_back_svg"><use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#shopback"></use></svg>
						</li>)}
							
					</ul>)
				}

				{this.state.touchend ? <p className="empty_data">没有更多了</p> : ''}
				{this.state.showBackStatus ? <aside className="return_top" onClick={this.backTop}>
					<svg className="back_top_svg">
						<use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#backtop"></use>
					</svg>
				</aside> : ''}
				<div ref="abc" style={ {backgroundColor:'red' } }></div>
				<transition name="loading">
					{ this.state.showLoading ? <Loading /> : ''}
				</transition>
			</div>
		)
	}
}
export default ShopList;