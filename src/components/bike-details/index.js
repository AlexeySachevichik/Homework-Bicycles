import React, {Component} from "react";
import axios from "axios";
import func from "libs/func";
import Tr from "./tr";
import Tbody from "./tbody";
import Inaccuracy from "./inaccuracy";
import RatingView from "./rating-view/";
import "./style.scss";


class BikeDetails extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoadedBike: false,
			isLoadedDescription: false,
			bike: {},
			description: {}
		};
	}

	componentDidMount() {
		axios.get(`${func.host}/bike/get/${this.props.id}`).then( response => {
			this.setState({ 
				bike: response.data,
				isLoadedBike: true
			});
		});
		axios.get(`${func.host}/description/get`).then( response => {
			this.setState({ 
				description: response.data,
				isLoadedDescription: true
			});
		});
	}

	render() {
		const { error, isLoadedBike, isLoadedDescription } = this.state;

		if( error ){
			return <p>Error: {error}</p>;

		} else if ( !isLoadedBike || !isLoadedDescription ){
			return <div>Loading...</div>;
		
		} else {
			const { bike, description } = this.state;
			const price = ("" + bike.info.price).split(".");

			return(
				<div className="bike-detail__wrapper">

					{/*
					<div id="button__back" className="button__back">назад</div>
				    */}

					<div className="header">
						<h1 className="header__title">{`${bike.info.manufacturer} ${bike.info.model} (${bike.info.year})`}</h1>
						<img src={`https://content2.onliner.by/catalog/device/main/${bike.info.image}`} alt={`${bike.info.manufacturer} ${bike.info.model} (${bike.info.year})`} className="header__image"/>
						<h3 className="header__text">{func.shortDescription(bike)}</h3>
					</div>


					<div className="info">
						<div className="info__item">
							<div className="title">{bike.info.views}</div>
							<div className="text">просмотры</div>
						</div>
						<div className="info__item">
							<div className="price__title">
								<span className="whole">{price[0]}</span>
								<span className="divis">{`,${price[1]}`}</span>
							</div>
							<div className="text">рублей</div>
						</div>
						<div className="info__item">
							<div className="title">17</div>
							<div className="text">отзывов</div>
						</div>
					</div>

					<div className="rating">
						<h3>Рейтинг</h3>
						<div className="wrapper">
							<RatingView ratingArray={bike.info.rating} />
						</div>
					</div>

					<div className="description">
						<h3>описание</h3>
						<p>{bike.info.description}</p>
					</div>

					<table className="table__wrapper">
						<tbody>
							<tr>
								<th colSpan="2" className="table__title"><h3>ОБЩАЯ ИНФОРМАЦИЯ</h3></th>
							</tr>
							<tr>
								<td>{description.info.manufacturer.title}</td>
								<td><b>{bike.info.manufacturer}</b></td>
							</tr>
							<tr>
								<td>{description.info.model.title}</td>
								<td><b>{bike.info.model}</b></td>
							</tr>
							<tr>
								<td>{description.info.year.title}</td>
								<td><b>{`${bike.info.year} ${description.info.year.unit}`}</b></td>
							</tr>
							<tr>
								<td>{description.info.class.title}</td>
								<td><b>{bike.info.class}</b></td>
							</tr>
							{ bike.info.womensBike ? <Tr title={description.info.womensBike.title} value={bike.info.womensBike} /> : null }
							{ bike.info.teenageBike ? <Tr title={description.info.teenageBike.title} value={bike.info.teenageBike} /> : null }
							<tr>
								<td>{description.info.weight.title}</td>
								<td><b>{`${func.icon(bike.info.weight)} ${description.info.weight.unit}`}</b></td>
							</tr>
						</tbody>

						{ func.isFullObject(bike.frame) ? <Tbody title="РАМА" titles={description.frame} values={bike.frame} /> : null }
						{ func.isFullObject(bike.fork) ? <Tbody title="ВИЛКА" titles={description.fork} values={bike.fork} /> : null }
						{ func.isFullObject(bike.transmission) ? <Tbody title="ТРАНСМИССИЯ" titles={description.transmission} values={bike.transmission} /> : null }
						{ func.isFullObject(bike.shifters) ? <Tbody title="МАНЕТКИ (ШИФТЕРЫ)" titles={description.shifters} values={bike.shifters} /> : null }
						{ func.isFullObject(bike.brake) ? <Tbody title="ТОРМОЗА" titles={description.brake} values={bike.brake} /> : null }
						{ func.isFullObject(bike.wheels) ? <Tbody title="КОЛЁСА" titles={description.wheels} values={bike.wheels} /> : null }
						{ func.isFullObject(bike.rudder) ? <Tbody title="РУЛЬ" titles={description.rudder} values={bike.rudder} /> : null }
						{ func.isFullObject(bike.saddle) ? <Tbody title="СЕДЛО" titles={description.saddle} values={bike.saddle} /> : null }
						{ func.isFullObject(bike.pedals) ? <Tbody title="ПЕДАЛИ" titles={description.pedals} values={bike.pedals} /> : null }
						{ func.isFullObject(bike.equipment) ? <Tbody title="КОМПЛЕКТАЦИЯ" titles={description.equipment} values={bike.equipment} /> : null }
						{ func.isFullObject(bike.battery) ? <Tbody title="АККУМУЛЯТОР" titles={description.battery} values={bike.battery} /> : null }
						{ func.isFullObject(bike.engine) ? <Tbody title="ДВИГАТЕЛЬ" titles={description.engine} values={bike.engine} /> : null }
					</table>

					<Inaccuracy bike={bike}/>
				</div>
			);
		}
	}
}

export default BikeDetails;