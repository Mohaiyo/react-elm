import React from 'react'
import HeaderTop from 'components/header/HeaderTop.jsx'
import { Link } from 'react-router-dom'
import { currentcity, searchplace } from 'services/getData'
import { getStore, setStore, removeStore } from 'src/config/mUtils'

class City extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			inputVaule:'', // 搜索地址
			cityid:'', // 当前城市id
			cityname:'', // 当前城市名字
			placelist:[], // 搜索城市列表
			placeHistory:[], // 历史搜索记录
			historytitle: true, // 默认显示搜索历史头部，点击搜索后隐藏
			placeNone: false // 搜索无结果，显示提示信息
		}
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.initData = this.initData.bind(this)
		this.nextpage = this.nextpage.bind(this)
		this.clearAll = this.clearAll.bind(this)
		this.postpois = this.postpois.bind(this)
		this.back = this.back.bind(this)
	}
	componentWillMount() {
		// 为啥没用？不可以调用setState
		// 关于componentWillMount 的事情是，没有组件可以玩，所以你不能做任何涉及DOM的事情,因为还没有渲染组件啊
		// this.setState({
		// 	cityid:this.props.match.params.id,
		// })
	}
	componentDidMount() {
		// 加载数据的位置，可以调用setState
		this.setState({
			cityid:this.props.match.params.id,
		})
		currentcity(this.props.match.params.id).then(res => {
			this.setState({
				cityname:res.name
			})
		})
		this.initData()
	}
	componentWillReceiveProps(nextProps) {
		// 最常见的用例：根据特定的props，更改来触发状态（state）转换。
		// 是否可以调用setState: Yes
	}
	shouldComponentUpdate(nextProps, nextState) {
		return true
		// 是否可以调用setState: No
		// 最常见的用例： 当您的组件 re-render (重新渲染)时，完全控制。
	}
	componentWillUpdate(nextProps, nextState) {
		// 最常见的用例： 在一个也有shouldComponentUpdate（但不能访问以前的props）的组件上使用而不是componentWillReceiveProps。
		// 是否可以调用setState: No
	}
	componentDidUpdate(prevProps, prevState) {
		// 最常见的用例：更新DOM以响应prop或state更改。
		// 是否可以调用setState: Yes
	}
	componentWillUnmount() {
		// 最常见的用例：清理组件中残留的残留物。如定时器
		// 是否可以调用setState: No
	}
	handleChange(event) {
	    this.setState({inputVaule: event.target.value});
	}
	handleSubmit(event) {
	    event.preventDefault();
	}
	initData(){
	    //获取搜索历史记录
	    if (getStore('placeHistory')) {
	    	this.setState({
	    		placelist:JSON.parse(getStore('placeHistory'))
	    	})
	    }else{
	    	this.setState({
	    		placelist:[]
	    	})
	    }
	}
	postpois(){
	    //输入值不为空时才发送信息
	    if (this.state.inputVaule) {
	        searchplace(this.state.cityid, this.state.inputVaule).then(res => {
	        	this.setState({
	        		historytitle:false,
	        		placelist:res,
	        		placeNone:res.length? false : true
	        	})
	        })
	    }
	}
	/**
	 * 点击搜索结果进入下一页面时进行判断是否已经有一样的历史记录
	 * 如果没有则新增，如果有则不做重复储存，判断完成后进入下一页
	 */
	nextpage(index,geohash){
	    let history = JSON.parse(getStore('placeHistory'))
	    let choosePlace = this.state.placelist[index]
	    if (history) {
	    	console.log(history)
	        let checkrepeat = false
	        this.setState({ //无法设置历史数据？
	        	placeHistory: history
	        })
	        //头晕
	        //历史搜索数据更新不成功!!!!,为什么？怎么解决?????
	        //setState延迟更新的原因在于—state是异步执行的，只有render发生变化的时候才触发this.setState()。
	        this.state.placeHistory.forEach(item => {
	            if (item.geohash == geohash) {
	                checkrepeat = true;
	            }
	        })
	        if (!checkrepeat) {
	        	this.state.placeHistory.push(choosePlace)
	        	this.setState({
	        		placeHistory:this.state.placeHistory
	        	})       
	        }
	    }else {
	    	this.state.placeHistory.push(choosePlace)
	    	this.setState({
	    		placeHistory: this.state.placeHistory
	    	})     
	    }
	    setStore('placeHistory',this.state.placeHistory)
	    this.props.history.push({
	    	pathname:'/msite',
	    	query:{geohash},
	    	search:'geohash='+geohash
	    })
	}
	clearAll(){
	    removeStore('placeHistory');
	    this.initData();
	}
	back(){
		this.props.history.go(-1)
	}
	render(){
		const historytitle = this.state.historytitle
		const placelist = this.state.placelist
		const placeNone = this.state.placeNone
		const cityname = this.state.cityname
		return(
				<div className="city_container">
			      <HeaderTop headTitle={cityname} goBack={this.back} changecity={true}/>
			      <form className="city_form" onSubmit={this.handleSubmit}>
			          <div>
			              <input type="search" name="city" placeholder="输入学校、商务楼、地址" className="city_input input_style" value={this.state.inputVaule} onChange={this.handleChange} required/>
			          </div>
			          <div>
			              <input type="submit" name="submit" className="city_submit input_style" onClick = {this.postpois} value="提交" />
			          </div>
			      </form>
			      { historytitle ? <header className="pois_search_history">搜索历史</header> : ''}
			      <ul className="getpois_ul">
				      { 
				      	placelist.map((item,index) => <li onClick={() => this.nextpage(index,item.geohash)} key={index}>
				              <h4 className="pois_name ellipsis">{item.name}</h4>
				              <p className="pois_address ellipsis">{item.address}</p>
				          </li>)
				      }			          
			      </ul>
			      { historytitle&&placelist.length ? <footer className="clear_all_history" onClick = {this.clearAll}>清空所有</footer> : ''}
			      { placeNone ? <div className="search_none_place">很抱歉！无搜索结果</div> : ''}
			  </div>
			)
	}
}

export default City;