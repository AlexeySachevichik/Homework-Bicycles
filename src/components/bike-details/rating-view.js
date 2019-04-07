import React, {Component} from "react";
import func from "libs/func";
import "./style.scss";

class RatingView extends Component {
	render() {

		const rating = this.props.ratingArray;
		const ratingSplit = ("" + func.calculateRating(rating)).split(".");
		const ratingStr = `${ratingSplit[0]},${ratingSplit[1].slice(0, 1)}`;
		const ratingAmount = func.amountRating(rating);

		const percentage = rating.map(item => {
			return +((item / ratingAmount) * 100).toFixed(2);
		});

		console.log(percentage);

		return(
			<div className="rating__wrapper">
				<div>
					<div>{ratingStr}</div>
					<div>{ratingAmount}</div>
				</div>

				<div className="rating-value__wrapper">
					{percentage.map( (element, index) => (
						<div key={index} className="item">
							<div className="assessment">{index + 1}</div>
							<div className="percent_wrapper">
								<div className="percent" style={{ width: `${element}%`}}/>
							</div>
						</div>
					))}
				</div>
			</div>
		);
	}
}

export default RatingView;