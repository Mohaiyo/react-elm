import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
class ShoppingCart extends React.Component{
	constructor(props) {
		super(props);
		this.state= {
			showMoveDot: [],//控制下落的小圆点显示隐藏
			shopCart:{},
			foodNum:0,
			cartList:[]
		}
		this.removeOutCart = this.removeOutCart.bind(this)
		this.addToCart = this.addToCart.bind(this)
		this.showChooseList = this.showChooseList.bind(this)
		this.showReduceTip = this.showReduceTip.bind(this)
	}
	componentDidMount() {
		this.setState({
			shopCart: this.shopCart,
			foodNum: this.foodNum
		})
	}
	shopCart(){
		return Object.assign({},this.state.cartList[this.props.shopId])
	}
	foodNum(){
		let category_id = this.props.foods.category_id;
		let item_id = this.props.foods.item_id;
		if (this.shopCart&&this.shopCart[category_id]&&this.shopCart[category_id][item_id]) {
		    let num = 0;
		    Object.values(this.shopCart[category_id][item_id]).forEach((item,index) => {
		        num += item.num;
		    })
		    return num;
		}else {
		    return 0;
		}
	}
	//移出购物车
	removeOutCart(category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock){
	    if (this.state.foodNum > 0) {
	        this.REDUCE_CART({shopid: this.props.shopId, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock});
	    }
	}
	//加入购物车，计算按钮位置。
	addToCart(category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock, event){
	    this.ADD_CART({shopid: this.props.shopId, category_id, item_id, food_id, name, price, specs, packing_fee, sku_id, stock});
	    let elLeft = event.target.getBoundingClientRect().left;
	    //getBoundingClientRect——获取element实际的top、bottom、left、right定位值
	    let elBottom = event.target.getBoundingClientRect().bottom;
	    this.showMoveDot.push(true);
	    this.$emit('showMoveDot', this.showMoveDot, elLeft, elBottom);

	}
	//显示规格列表
	showChooseList(foodScroll){
	    this.$emit('showChooseList', foodScroll)
	}
    //点击多规格商品的减按钮，弹出提示
    showReduceTip(){
        this.$emit('showReduceTip')
    }
	render() {
		let foods = this.props.foods
		return(
			<section className="cart_module">
			    { !foods.specifications.length ?
			    	<section className="cart_button">
				        <ReactCSSTransitionGroup transitionName="showReduce" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
				            {  this.state.foodNum ? <span onClick={() => this.removeOutCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock)}>
				                <svg>
				                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-minus"></use>
				                </svg>
				            </span> : ''}
				        </ReactCSSTransitionGroup>
				        <ReactCSSTransitionGroup transitionName="fade">
				            { this.state.foodNum ? <span className="cart_num">{this.state.foodNum}</span> : ''}
				        </ReactCSSTransitionGroup>
				        <svg className="add_icon" onTouchstart={() => this.addToCart(foods.category_id, foods.item_id, foods.specfoods[0].food_id, foods.specfoods[0].name, foods.specfoods[0].price, '', foods.specfoods[0].packing_fee, foods.specfoods[0].sku_id, foods.specfoods[0].stock, $event)}>
				            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#cart-add"></use>
				        </svg>
				    </section> :
				    <section className="choose_specification">
				        <section className="choose_icon_container">
				            <ReactCSSTransitionGroup transitionName="showReduce">
				                {this.state.foodNum ?<svg className="specs_reduce_icon" onClick={this.showReduceTip}>
				                    <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cart-minus"></use>
				                </svg> : ''}
				            </ReactCSSTransitionGroup>
				            <ReactCSSTransitionGroup transitionName="fade">
				                {this.state.foodNum ? <span className="cart_num">{this.state.foodNum }</span> : ''}
				            </ReactCSSTransitionGroup>
				            <span className="show_chooselist" onClick={ () => this.showChooseList(foods)}>选规格</span>
				        </section>
				    </section>
			    }
			</section>
		)
	}
}

export default ShoppingCart