import React from 'react'


class AlertTip extends React.Component{
	constructor(props) {
		super(props)
		this.state = {}
		this.closeTip = this.closeTip.bind(this)
	}
	closeTip(){
		this.props.closeTip()
	}
	render() {
		const alertText = this.props.alertText
		return (
		    <div className="alet_container">
			    <section className="tip_text_container">
		            <div className="tip_icon">
		                <span></span>
		                <span></span>
		            </div>
		            <p className="tip_text">{alertText}</p>
		            <div className="confrim" onClick={this.closeTip}>确认</div>
		        </section>
		    </div>
			)
	}
}
export default AlertTip;