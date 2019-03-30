import React, {Component} from "react";
import Func from "libs/func";
import "./style.scss";

class BikeDetails extends Component {
	render() {

		const {bike} = this.props;
		let text = Func.shortDescription(bike);
		const rating = Func.calculateRating(bike.rating);

		return (
			<div className="bike-detail__wrapper">

				<div className="header">
					<h1 className="header__title">{`${bike.manufacturer} ${bike.model} (${bike.year})`}</h1>
					<img src={`https://content2.onliner.by/catalog/device/main/${bike.image}`} alt={`${bike.manufacturer} ${bike.model} (${bike.year})`} className="header__image"/>
					<p className="header__text">{text}</p>
				</div>

				<div className="rating">
					<div className="rating__item">
						<div className="views__title">{bike.views}</div>
						<div className="rating__text">просмотры</div>
					</div>
					<div className="rating__item">
						<div className="price__title">{bike.price}</div>
						<div className="rating__text">рублей</div>
					</div>
					<div className="rating__item">
						<div className="value__title">{rating}</div>
						<div className="rating__text">оценка</div>
					</div>
				</div>

				<div className="description">
					<h3>описание</h3>
					<p>{bike.description}</p>
				</div>

				<table className="table__wrapper">
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Общая информация</th>
						</tr>
						<tr>
							<td>Дата выхода на рынок</td>
							<td>{`${bike.year}г.`}</td>
						</tr>
						<tr>
							<td>Класс</td>
							<td>{bike.class}</td>
						</tr>
						<tr>
							<td>Женский велосипед</td>
							<td>----</td>
						</tr>
						<tr>
							<td>Подростковый велосипед</td>
							<td>----</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">рама</th>
						</tr>
						<tr>
							<td>Материал рамы</td>
							<td>{bike.frameMaterial}</td>
						</tr>
						<tr>
							<td>Тип рамы</td>
							<td>{bike.frameType}</td>
						</tr>
						<tr>
							<td>Складная рама</td>
							<td>----</td>
						</tr>
						<tr>
							<td>Задний амортизатор</td>
							<td>----</td>
						</tr>
						<tr>
							<td>Цвет рамы</td>
							<td>{bike.frameColor}</td>
						</tr>
					</tbody>
				</table>
			</div>
		);
	}
}

export default BikeDetails;