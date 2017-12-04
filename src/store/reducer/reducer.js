import {
	RECORD_ADDRESS,
	ADD_CART,
	REDUCE_CART,
	INIT_BUYCART,
	CLEAR_CART,
	RECORD_SHOPDETAIL,
	RECORD_USERINFO,
	GET_USERINFO,
	CONFIRM_REMARK,
	CONFIRM_INVOICE,
	CHOOSE_SEARCH_ADDRESS,
	SAVE_GEOHASH,
	CONFIRM_ADDRESS,
	CHOOSE_ADDRESS,
	NEED_VALIDATION,
	SAVE_CART_ID_SIG,
	SAVE_ORDER_PARAM,
	CHANGE_ORDER_PARAM,
	ORDER_SUCCESS,
	SAVE_SHOPID,
	SAVE_ORDER,
	OUT_LOGIN,
	RETSET_NAME,
	SAVE_AVANDER,
	SAVE_ADDRESS,
	SAVE_ADDDETAIL,
	SAVE_QUESTION,
	ADD_ADDRESS,
	BUY_CART,
} from '../action/actionType'

//初始化状态
const initialState = {
	latitude: '', // 当前位置纬度
	longitude: '', // 当前位置经度
	cartList: {}, // 加入购物车的商品列表
	shopDetail: null, //商家详情信息
	userInfo: null, //用户信息
	shopid: null,//商铺id
	remarkText: null,//可选备注内容
	inputText: '',//输入备注内容
	invoice: false,//开发票
	newAddress: [], //确认订单页新的地址
	searchAddress: null,//搜索并选择的地址
	geohash: 'wtw3sm0q087',//地址geohash值
	choosedAddress: null,//选择地址
	addressIndex: null,//选择地址的索引值
	needValidation: null,//确认订单时是否需要验证
	cartId: null, //购物车id
	sig: null,//购物车sig
	orderParam: null,//订单的参数
	orderMessage: null, //订单返回的信息
	orderDetail: null, //订单详情
	login: true,//是否登录
	imgPath:null,//头像地址
	removeAddress:[],//移除地址
	addAddress:'',		//新增地址
	question: null,//问题详情
	cartPrice: null, //会员卡价格
}

function todoApp(state = initialState, action) {
	console.log(action)
  	switch (action.type) {
    	case RECORD_ADDRESS:
      	return Object.assign({}, state, {
        	latitude: action.latitude,
        	longitude: action.longitude
      	})
  		case SAVE_GEOHASH:
  	  	return Object.assign({}, state, {
  	    	geohash: action.geohash,
  	  	})
    	default:
      		return state
  	}
}

export default todoApp