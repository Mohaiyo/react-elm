import React from 'react'

class RatingStar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			arrFive: [1,2,3,4,5]
		}
	}
	render() {
		let rating = this.props.rating
		let arrFive = this.state.arrFive
		return(
			<div className="rating_container">
		        <section className="star_container">
		            { arrFive.map( num =><svg className="grey_fill" key={num}>
		                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#star"></use>
		            </svg>)	}	            	
		        </section>
		        <div style={{ width:  rating*2/5 + 'rem'}} className="star_overflow">
		            {/* 2rem = 40px  评分5颗星刚好等于40px 所以需要乘以2*/}
		             <section className="star_container" >
		                {arrFive.map( numb => <svg  className="orange_fill" key={numb}>
		                    <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#star"></use>
		                </svg> ) }
		            </section>
		        </div>
		    </div>
		)
	}
}
export default RatingStar;