import React from 'react'
import {Link} from 'react-router-dom'
import HeaderTop from 'components/header/HeaderTop.jsx'
import FootGuide from 'components/footer/FootGuide.jsx'
import {searchRestaurant} from 'services/getData'
import {getStore, setStore} from 'src/config/mUtils'

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			geohash: '', // msite页面传递过来的地址信息
			searchValue: '', // 搜索内容
			restaurantList: [], // 搜索返回的结果
			imgBaseUrl: '', // 图片域名地址
			searchHistory: [], // 搜索历史记录
			showHistory: true, // 是否显示历史记录，只有在返回搜索结果后隐藏
			emptyResult: false, // 搜索结果为空时显示
		}
		this.searchTarget = this.searchTarget.bind(this)
		this.deleteHistory = this.deleteHistory.bind(this)
		this.clearAllHistory = this.clearAllHistory.bind(this)
		this.back = this.back.bind(this)
		this.handleSearchChange = this.handleSearchChange.bind(this)
	}
	componentDidMount() {
		this.setState({
			geohash:this.props.location.query
		})
		//获取搜索历史记录
		if (getStore('searchHistory')) {
			this.setState({
				searchHistory:JSON.parse(getStore('searchHistory'))
			})
		}
	}

	//点击提交按钮，搜索结果并显示，同时将搜索内容存入历史记录
	async searchTarget(historyValue){
	    if (historyValue) {
	    	this.setState({
	    		searchValue: historyValue
	    	})
	    }else if (!this.searchValue) {
	        return 
	    }
	    //隐藏历史记录
	    this.setState({
	    	showHistory:false
	    })
	    //获取搜索结果
	    let res = await searchRestaurant(this.state.geohash, this.state.searchValue)
	    this.setState({
	    	restaurantList:　res,
	    	emptyResult: !res.length
	    })
	    /**
	     * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
	     * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
	     */
	    let history = getStore('searchHistory');
	    if (history) { 
	        let checkrepeat = false
	        this.setState({
	        	searchHistory:JSON.parse(history)
	        })
	        this.state.searchHistory.forEach(item => {
	            if (item == this.searchValue) {
	                checkrepeat = true;
	            }
	        })
	        if (!checkrepeat) {
	          let searchHistory = this.state.searchHistory.push(this.searchValue)
	            this.setState({
	            	searchHistory:searchHistory
	            })

	        }
	    }else {
	       let searchHistory = this.searchHistory.push(this.searchValue)
	       this.setSttate({
	       	searchHistory:searchHistory
	       })
	    }
	    setStore('searchHistory',this.state.searchHistory)
	}
	//阻止默认提交
	handleSubmit(event) {
	    event.preventDefault();
	}
	//搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
	// checkInput(){
	//     if (this.state.searchValue === '') {
	//     	this.setState({
	//     		showHistory: true, //显示历史记录
	//     		restaurantList: [],//清空搜索结果
	//     		emptyResult:false //隐藏搜索为空提示
	//     	})
	//     } 
	// }
	//点击删除按钮，删除当前历史记录
	deleteHistory(index){
	    let searchHistory = this.state.searchHistory.splice(index, 1)
	    this.setState({
	    	searchHistory:searchHistory
	    })
	    setStore('searchHistory',this.state.searchHistory)
	}
	//清除所有历史记录
	clearAllHistory(){

		this.setState({
			searchHistory: []
		})
	    setStore('searchHistory',this.state.searchHistory)
	}
	back(){
		this.props.history.go(-1)
	}
	//搜索结束后，删除搜索内容直到为空时清空搜索结果，并显示历史记录
	handleSearchChange(event){
		this.setState({
			searchValue: event.target.value
		})
		if (this.state.searchValue === '') {
			this.setState({
				showHistory: true, //显示历史记录
				restaurantList: [],//清空搜索结果
				emptyResult:false //隐藏搜索为空提示
			})
		}
	}
	render() {
		return(
				<div className="paddingTop search_page">
			    	<HeaderTop goBack={this.back} headTitle = '搜索' />
			      	<form className="search_form" onSubmit={this.handleSubmit}>
			          	<input type="search" name="search" placeholder="请输入商家或美食名称" className="search_input" value= {this.state.searchValue} onChange={this.handleSearchChange} />
			          	<input type="submit" name="submit" className="search_submit" onClick={ () => this.searchTarget(this.state.searchValue) } />
			      	</form>
			      	{
			      		this.state.restaurantList.length ?
		      			(<section>
		      		    	<h4 className="title_restaurant">商家</h4>
		      		    	<ul className="list_container">
		      		        	{
		      		        		this.state.restaurantList.map((item,index) => (<Link to={ '/shop' + item.id } key={item.id} className="list_li">
		      		            	<section className="item_left">
		      		                	<img src={this.state.imgBaseUrl + item.image_path} className="restaurant_img" />
		      		            	</section>
		      		            	<section className="item_right">
		      		                	<div className="item_right_text">
		      		                    	<p>
		      		                        	<span>{item.name}</span>
		      		                        	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="14" className="pay_icon">
		      		                            	<polygon points="0,14 4,0 24,0 20,14" style={{ fill:'none',stroke:'#FF6000',strokeWidth:1 }} />
		      		                            	<line x1="1.5" y1="12" x2="20" y2="12" style={{ stroke:'#FF6000',strokeWidth:1.5 }}/>
		      		                            	<text x="3.5" y="9" style={{ fill:'#FF6000',fontSize:9,fontWeight:'bold' }}>支付</text>
		      		                        	</svg>
		      		                    	</p>
		      		                    	<p>月售 {item.month_sales || item.recent_order_num} 单</p>
		      		                    	<p>{item.delivery_fee || item.float_minimum_order_amount } 元起送 / 距离{item.distance} </p>
		      		                	</div>
		      		                	<ul className="item_right_detail">
		      		                		{item.restaurant_activity.map((activities)=>(
		      		                				<li  key={activities.id}>
		      		                			    	<span style={ {backgroundColor: '#' + activities.icon_color} } className="activities_icon">{activities.icon_name}</span>
		      		                			    	<span>{activities.name}</span>
		      		                			    	<span className="only_phone">(手机客户端专享)</span>
		      		                				</li>
		      		                			))}
		      		                	</ul>
		      		            	</section>
		      		        	</Link>))
		      		        	}
		      		    	</ul>
		      			</section>) : ''
			      	}
			      	{
			      		this.state.searchHistory.length && this.state.showHistory ? 
			      			<section className="search_history">
			      		    	<h4 className="title_restaurant">搜索历史</h4>
			      		    	<ul>
			      		    	{
			      		    		this.state.searchHistory.map((item,index) =>(
			      		    		<li key={index} className="history_list">
			      		            	<span className="history_text ellipsis" onClick={ () => this.searchTarget(item)}>{ item }</span>
			      		            	<svg xmlns="http://www.w3.org/2000/svg" version="1.1" className="delete_icon" onClick={()=>this.deleteHistory(index)}>
			      		                	<line x1="8" y1="8" x2="18" y2="18" style={{stroke:'#999',strokeWidth:3}} />
			      		                	<line x1="18" y1="8" x2="8" y2="18" style={{ stroke:'#999',strokeWidth:3}} />
			      		            	</svg>
			      		        	</li>))
			      		    	}

			      		    	</ul>
			      		    	<footer className="clear_history" onClick={this.clearAllHistory }>清空搜索历史</footer>
			      			</section>
			      			: ''
			      	}

			      	{ this.state.emptyResult ? <div className="search_none">很抱歉！无搜索结果</div> : ''}
			      	<FootGuide history = {this.props.history} geohash={this.state.geohash}/>
			  </div>
		)
	}
}

export default Search;