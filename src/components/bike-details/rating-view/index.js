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

		return(
			<div className="rating__wrapper">
				<div className="rating-info">
					<div className="rating-value">{ratingStr}</div>
					<div className="rating-amount">{`${ratingAmount} голосов`}</div>
				</div>

				<div className="rating-graph">
					{percentage.map( (element, index) => (
						<div key={ 5 - index } className="item">
							<div className="assessment">{ 5 - index }</div>
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