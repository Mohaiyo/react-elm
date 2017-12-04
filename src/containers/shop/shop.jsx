import React from 'react'
import {Link} from 'react-router-dom'
import Loading from 'components/common/Loading.jsx'
import ShopingCart from 'components/common/ShopingCart.jsx'
import RatingStar from 'components/common/RatingStar.jsx'
import {loadMore, getImgPath} from 'components/common/mixin'
import BScroll from 'better-scroll'

class Shop extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			geohash: '', //geohash位置信息
			shopId: null, //商店id值
			showLoading: true, //显示加载动画
			changeShowType: 'food',//切换显示商品或者评价
			shopDetailData: null, //商铺详情
			showActivities: false, //是否显示活动详情
			menuList: [], //食品列表
			menuIndex: 0, //已选菜单索引值，默认为0
			menuIndexChange: true,//解决选中index时，scroll监听事件重复判断设置index的bug
			shopListTop: [], //商品列表的高度集合
			TitleDetailIndex: null, //点击展示列表头部详情
			categoryNum: [], //商品类型右上角已加入购物车的数量
			totalPrice: 0, //总共价格
			cartFoodList: [], //购物车商品列表
			showCartList: false,//显示购物车列表
			receiveInCart: false, //购物车组件下落的圆点是否到达目标位置
			ratingList: null, //评价列表
			ratingOffset: 0, //评价获取数据offset值
			ratingScoresData: null, //评价总体分数
			ratingTagsList: null, //评价分类列表
			ratingTageIndex: 0, //评价分类索引
			preventRepeatRequest: false,// 防止多次触发数据请求
			ratingTagName: '',//评论的类型
			loadRatings: false, //加载更多评论是显示加载组件
			foodScroll: null,  //食品列表scroll
			showSpecs: false,//控制显示食品规格
			specsIndex: 0, //当前选中的规格索引值
			choosedFoods: null, //当前选中视频数据
			showDeleteTip: false, //多规格商品点击减按钮，弹出提示框
			showMoveDot: [], //控制下落的小圆点显示隐藏
			windowHeight: null, //屏幕的高度
			elLeft: 0, //当前点击加按钮在网页中的绝对top值
			elBottom: 0, //当前点击加按钮在网页中的绝对left值
			ratingScroll: null, //评论页Scroll
			imgBaseUrl,
		}
	}
	render() {
		return(
			<div>
				{ !this.state.showLoading ?
				<section v-if="showLoading" className="shop_container">
				    <nav className="goback" @click="goback">
				        <svg width="4rem" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
				            <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:3"/>
				        </svg>
				    </nav>
				    <header className="shop_detail_header" ref="shopheader" :style="{zIndex: showActivities? '14':'10'}">
				        <img :src="imgBaseUrl + shopDetailData.image_path" className="header_cover_img">
				        <section className="description_header">
				            <router-link to="/shop/shopDetail" className="description_top">
				                <section className="description_left">
				                    <img :src="imgBaseUrl + shopDetailData.image_path">
				                </section>
				                <section className="description_right">
				                    <h4 className="description_title ellipsis">{{shopDetailData.name}}</h4>
				                    <p className="description_text">商家配送／{{shopDetailData.order_lead_time}}分钟送达／配送费¥{{shopDetailData.float_delivery_fee}}</p>
				                    <p className="description_promotion ellipsis">公告：{{promotionInfo}}</p>
				                </section>
				                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg" version="1.1" className="description_arrow" >
				                    <path d="M0 0 L8 7 L0 14"  stroke="#fff" stroke-width="1" fill="none"/>
				                </svg>
				            </router-link>
				            <footer className="description_footer" v-if="shopDetailData.activities.length" @click="showActivitiesFun">
				                <p className="ellipsis">
				                    <span className="tip_icon" :style="{backgroundColor: '#' + shopDetailData.activities[0].icon_color, borderColor: '#' + shopDetailData.activities[0].icon_color}">{{shopDetailData.activities[0].icon_name}}</span>
				                    <span>{{shopDetailData.activities[0].description}}（APP专享）</span>
				                </p>
				                <p>{{shopDetailData.activities.length}}个活动</p>
				                <svg className="footer_arrow">
				                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-left"></use>
				                </svg>
				            </footer>

				        </section>
				    </header>
				    <transition name="fade">
				        <section className="activities_details" v-if="showActivities">
				            <h2 className="activities_shoptitle">{{shopDetailData.name}}</h2>
				            <h3 className="activities_ratingstar">
				                <rating-star :rating='shopDetailData.rating'></rating-star>
				            </h3>
				            <section className="activities_list">
				                <header className="activities_title_style"><span>优惠信息</span></header>
				                <ul>
				                    <li v-for="item in shopDetailData.activities" :key="item.id">
				                        <span className="activities_icon" :style="{backgroundColor: '#' + item.icon_color, borderColor: '#' + item.icon_color}">{{item.icon_name}}</span>
				                        <span>{{item.description}}（APP专享）</span>
				                    </li>
				                </ul>
				            </section>
				            <section className="activities_shopinfo">
				                <header className="activities_title_style"><span>商家公告</span></header>
				                <p>{{promotionInfo}}</p>
				            </section>
				            <svg width="60" height="60" className="close_activities" @click.stop="showActivitiesFun">
				                <circle cx="30" cy="30" r="25" stroke="#555" stroke-width="1" fill="none"/>
				                <line x1="22" y1="38" x2="38" y2="22" style="stroke:#999;stroke-width:2"/>
				                <line x1="22" y1="22" x2="38" y2="38" style="stroke:#999;stroke-width:2"/>
				            </svg>
				        </section>
				    </transition>
				    <section className="change_show_type" ref="chooseType">
				        <div>
				            <span :className='{activity_show: changeShowType =="food"}' @click="changeShowType='food'">商品</span>
				        </div>
				        <div>
				            <span :className='{activity_show: changeShowType =="rating"}' @click="changeShowType='rating'">评价</span>
				        </div>
				    </section>
				    <transition name="fade-choose">
				        <section v-show="changeShowType =='food'" className="food_container">
				            <section className="menu_container">
				                <section className="menu_left" id="wrapper_menu" ref="wrapperMenu">
				                    <ul>
				                        <li v-for="(item,index) in menuList" :key="index" className="menu_left_li" :className="{activity_menu: index == menuIndex}" @click="chooseMenu(index)">
				                            <img :src="getImgPath(item.icon_url)" v-if="item.icon_url">
				                            <span>{{item.name}}</span>
				                            <span className="category_num" v-if="categoryNum[index]&&item.type==1">{{categoryNum[index]}}</span>
				                        </li>
				                    </ul>
				                </section>
				                <section className="menu_right" ref="menuFoodList">
				                    <ul>
				                        <li v-for="(item,index) in menuList" :key="index">
				                            <header className="menu_detail_header">
				                                <section className="menu_detail_header_left">
				                                    <strong className="menu_item_title">{{item.name}}</strong>
				                                    <span className="menu_item_description">{{item.description}}</span>
				                                </section>
				                                <span className="menu_detail_header_right" @click="showTitleDetail(index)"></span>
				                                <p className="description_tip" v-if="index == TitleDetailIndex">
				                                    <span>{{item.name}}</span>
				                                    {{item.description}}
				                                </p>
				                            </header>
				                            <section v-for="(foods,foodindex) in item.foods" :key="foodindex" className="menu_detail_list">
				                                <router-link  :to="{path: 'shop/foodDetail', query:{image_path:foods.image_path, description: foods.description, month_sales: foods.month_sales, name: foods.name, rating: foods.rating, rating_count: foods.rating_count, satisfy_rate: foods.satisfy_rate, foods, shopId}}" tag="div" className="menu_detail_link">
				                                    <section className="menu_food_img">
				                                        <img :src="imgBaseUrl + foods.image_path">
				                                    </section>
				                                    <section className="menu_food_description">
				                                        <h3 className="food_description_head">
				                                            <strong className="description_foodname">{{foods.name}}</strong>
				                                            <ul v-if="foods.attributes.length" className="attributes_ul">
				                                                <li v-for="(attribute, foodindex) in foods.attributes" :key="foodindex" :style="{color: '#' + attribute.icon_color,borderColor:'#' +attribute.icon_color}" :className="{attribute_new: attribute.icon_name == '新'}">
				                                                <p :style="{color: attribute.icon_name == '新'? '#fff' : '#' + attribute.icon_color}">{{attribute.icon_name == '新'? '新品':attribute.icon_name}}</p>
				                                                </li>
				                                            </ul>

				                                        </h3>
				                                        <p className="food_description_content">{{foods.description}}</p>
				                                        <p className="food_description_sale_rating">
				                                            <span>月售{{foods.month_sales}}份</span>
				                                            <span>好评率{{foods.satisfy_rate}}%</span>
				                                        </p>
				                                        <p v-if="foods.activity" className="food_activity">
				                                        <span :style="{color: '#' + foods.activity.image_text_color,borderColor:'#' +foods.activity.icon_color}">{{foods.activity.image_text}}</span>
				                                        </p>
				                                    </section>
				                                </router-link>
				                                <footer className="menu_detail_footer">
				                                    <section className="food_price">
				                                        <span>¥</span>
				                                        <span>{{foods.specfoods[0].price}}</span>
				                                        <span v-if="foods.specifications.length">起</span>
				                                    </section>
				                                    <buy-cart :shopId='shopId' :foods='foods' @moveInCart="listenInCart" @showChooseList="showChooseList" @showReduceTip="showReduceTip" @showMoveDot="showMoveDotFun"></buy-cart>
				                                </footer>
				                            </section>
				                        </li>
				                    </ul>
				                </section>
				            </section>
				            <section className="buy_cart_container">
				                <section @click="toggleCartList" className="cart_icon_num">
				                    <div className="cart_icon_container" :className="{cart_icon_activity: totalPrice > 0, move_in_cart:receiveInCart}" ref="cartContainer">
				                        <span v-if="totalNum" className="cart_list_length">
				                            {{totalNum}}
				                        </span>
				                        <svg className="cart_icon">
				                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-icon"></use>
				                        </svg>
				                    </div>
				                    <div className="cart_num">
				                        <div>¥ {{totalPrice}}</div>
				                        <div>配送费¥{{deliveryFee}}</div>
				                    </div>
				                </section>
				                <section className="gotopay" :className="{gotopay_acitvity: minimumOrderAmount <= 0}">
				                    <span className="gotopay_button_style" v-if="minimumOrderAmount > 0">还差¥{{minimumOrderAmount}}起送</span>
				                    <router-link :to="{path:'/confirmOrder', query:{geohash, shopId}}" className="gotopay_button_style" v-else >去结算</router-link>
				                </section>
				            </section>
				            <transition name="toggle-cart">
				                <section className="cart_food_list" v-show="showCartList&&cartFoodList.length">
				                    <header>
				                        <h4>购物车</h4>
				                        <div @click="clearCart">
				                            <svg>
				                                <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-remove"></use>
				                            </svg>
				                            <span className="clear_cart">清空</span>
				                        </div>
				                    </header>
				                    <section className="cart_food_details" id="cartFood">
				                        <ul>
				                            <li v-for="(item, index) in cartFoodList" :key="index" className="cart_food_li">
				                                <div className="cart_list_num">
				                                    <p className="ellipsis">{{item.name}}</p>
				                                    <p className="ellipsis">{{item.specs}}</p>
				                                </div>
				                                <div className="cart_list_price">
				                                    <span>¥</span>
				                                    <span>{{item.price}}</span>
				                                </div>
				                                <section className="cart_list_control">
				                                    <span @click="removeOutCart(item.category_id, item.item_id, item.food_id, item.name, item.price, item.specs)">
				                                        <svg>
				                                            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
				                                        </svg>
				                                    </span>
				                                    <span className="cart_num">{{item.num}}</span>
				                                    <svg className="cart_add" @click="addToCart(item.category_id, item.item_id, item.food_id, item.name, item.price, item.specs)">
				                                        <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
				                                    </svg>
				                                </section>
				                            </li>
				                        </ul>
				                    </section>
				                </section>
				            </transition>
				            <transition name="fade">
				                <div className="screen_cover" v-show="showCartList&&cartFoodList.length" @click="toggleCartList"></div>
				            </transition>
				        </section>
				    </transition>
				    <transition name="fade-choose">
				        <section className="rating_container" id="ratingContainer" v-show="changeShowType =='rating'">
				            <section v-load-more="loaderMoreRating" type="2">
				                <section>

				                    <header className="rating_header">
				                        <section className="rating_header_left">
				                            <p>{{shopDetailData.rating}}</p>
				                            <p>综合评价</p>
				                            <p>高于周边商家{{(ratingScoresData.compare_rating*100).toFixed(1)}}%</p>
				                        </section>
				                        <section className="rating_header_right">
				                            <p>
				                                <span>服务态度</span>
				                                <rating-star :rating='ratingScoresData.service_score'></rating-star>
				                                <span className="rating_num">{{ratingScoresData.service_score.toFixed(1)}}</span>
				                            </p>
				                            <p>
				                                <span>菜品评价</span>
				                                <rating-star :rating='ratingScoresData.food_score'></rating-star>
				                                <span className="rating_num">{{ratingScoresData.food_score.toFixed(1)}}</span>
				                            </p>
				                            <p>
				                                <span>送达时间</span>
				                                <span className="delivery_time">{{shopDetailData.order_lead_time}}分钟</span>
				                            </p>
				                        </section>
				                    </header>
				                    <ul className="tag_list_ul">
				                        <li v-for="(item, index) in ratingTagsList" :key="index" :className="{unsatisfied: item.unsatisfied, tagActivity: ratingTageIndex == index}" @click="changeTgeIndex(index, item.name)">{{item.name}}({{item.count}})</li>
				                    </ul>
				                    <ul className="rating_list_ul">
				                        <li v-for="(item, index) in ratingList" :key="index" className="rating_list_li">
				                            <img :src="getImgPath(item.avatar)" className="user_avatar">
				                            <section className="rating_list_details">
				                                <header>
				                                    <section className="username_star">
				                                        <p className="username">{{item.username}}</p>
				                                        <p className="star_desc">
				                                            <rating-star :rating='item.rating_star'></rating-star>
				                                            <span className="time_spent_desc">{{item.time_spent_desc}}</span>
				                                        </p>
				                                    </section>
				                                    <time className="rated_at">{{item.rated_at}}</time>
				                                </header>
				                                <ul className="food_img_ul">
				                                    <li v-for="(item, index) in item.item_ratings" :key="index">
				                                        <img :src="getImgPath(item.image_hash)" v-if="item.image_hash">
				                                    </li>
				                                </ul>
				                                <ul className="food_name_ul">
				                                    <li v-for="(item, index) in item.item_ratings" :key="index" className="ellipsis">
				                                        {{item.food_name}}
				                                    </li>
				                                </ul>
				                            </section>
				                        </li>
				                    </ul>
				                </section>
				            </section>
				        </section>
				    </transition>
				</section> :
				<section className="animation_opactiy shop_back_svg_container" >
				   <img src="../../images/shop_back_svg.svg">
				</section>
			}
				<section>
				    <transition name="fade">
				        <div className="specs_cover" @click="showChooseList" v-if="showSpecs"></div>
				    </transition>
				    <transition name="fadeBounce">
				        <div className="specs_list" v-if="showSpecs">
				            <header className="specs_list_header">
				                <h4 className="ellipsis">{{choosedFoods.name}}</h4>
				                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" version="1.1"className="specs_cancel" @click="showChooseList">
				                    <line x1="0" y1="0" x2="16" y2="16"  stroke="#666" stroke-width="1.2"/>
				                    <line x1="0" y1="16" x2="16" y2="0"  stroke="#666" stroke-width="1.2"/>
				                </svg>
				            </header>
				            <section className="specs_details">
				                <h5 className="specs_details_title">{{choosedFoods.specifications[0].name}}</h5>
				                <ul>
				                    <li v-for="(item, itemIndex) in choosedFoods.specifications[0].values" :className="{specs_activity: itemIndex == specsIndex}" @click="chooseSpecs(itemIndex)">
				                        {{item}}
				                    </li>
				                </ul>
				            </section>
				            <footer className="specs_footer">
				                <div className="specs_price">
				                    <span>¥ </span>
				                    <span>{{choosedFoods.specfoods[specsIndex].price}}</span>
				                </div>
				                <div className="specs_addto_cart" @click="addSpecs(choosedFoods.category_id, choosedFoods.item_id, choosedFoods.specfoods[specsIndex].food_id, choosedFoods.specfoods[specsIndex].name, choosedFoods.specfoods[specsIndex].price, choosedFoods.specifications[0].values[specsIndex], choosedFoods.specfoods[specsIndex].packing_fee, choosedFoods.specfoods[specsIndex].sku_id, choosedFoods.specfoods[specsIndex].stock)">加入购物车</div>
				            </footer>
				        </div>
				    </transition>
				</section>
				<transition name="fade">
				    <p className="show_delete_tip" v-if="showDeleteTip">多规格商品只能去购物车删除哦</p>
				</transition>
				<transition
				appear
				@after-appear = 'afterEnter'
				@before-appear="beforeEnter"
				v-for="(item,index) in showMoveDot"
				>
				    <span className="move_dot" v-if="item">
				        <svg className="move_liner">
				            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-add"></use>
				        </svg>
				    </span>
				</transition>
				<loading v-show="showLoading || loadRatings"></loading>

				<transition name="router-slid" mode="out-in">
				    <router-view></router-view>
				</transition>
			</div>
			)
	}
}