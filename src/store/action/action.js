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
} from './actionType'

import {setStore, getStore} from 'src/config/mUtils'
// 记录当前经度纬度
// 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名?
// 这叫做action创建函数
export function recordAddress (latitude,longitude) {
	//返回一个action
  return { type: RECORD_ADDRESS, latitude, longitude}
}
//保存geohash
export function saveGeohash (geohash) {
  return { type: SAVE_GEOHASH, geohash}
}