import React, {Component} from "react";
import Func from "libs/func";
import "./style.scss";

class BikeDetails extends Component {
	render() {

		const {bike} = this.props;

		return (
			<div className="bike-detail__wrapper">

				{/*
				<div id="button__back" className="button__back">назад</div>
				*/}
			
				<div className="header">
					<h1 className="header__title">{`${bike.manufacturer} ${bike.model} (${bike.year})`}</h1>
					<img src={`https://content2.onliner.by/catalog/device/main/${bike.image}`} alt={`${bike.manufacturer} ${bike.model} (${bike.year})`} className="header__image"/>
					<p className="header__text">{Func.shortDescription(bike)}</p>
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
						<div className="value__title">{Func.calculateRating(bike.rating)}</div>
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
							<td>Производитель</td>
							<td><b>{Func.icon(bike.manufacturer)}</b></td>
						</tr>
						<tr>
							<td>Модель</td>
							<td><b>{Func.icon(bike.model)}</b></td>
						</tr>
						<tr>
							<td>Дата выхода на рынок</td>
							<td><b>{`${bike.year} г.`}</b></td>
						</tr>
						<tr>
							<td>Класс</td>
							<td><b>{bike.class}</b></td>
						</tr>
						<tr>
							<td>Женский велосипед</td>
							<td><b>{Func.icon(bike.womensBike)}</b></td>
						</tr>
						<tr>
							<td>Подростковый велосипед</td>
							<td><b>{Func.icon(bike.teenageBike)}</b></td>
						</tr>
						<tr>
							<td>Вес</td>
							<td><b>{`${Func.icon(bike.weight)} кг`}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">рама</th>
						</tr>
						<tr>
							<td>Материал рамы</td>
							<td><b>{Func.icon(bike.frameMaterial)}</b></td>
						</tr>
						<tr>
							<td>Тип рамы</td>
							<td><b>{Func.icon(bike.frameType)}</b></td>
						</tr>
						<tr>
							<td>Складная рама</td>
							<td>{Func.icon(bike.foldableFrame)}</td>
						</tr>
						<tr>
							<td>Задний амортизатор</td>
							<td>{Func.icon(bike.fullSuspension)}</td>
						</tr>
						<tr>
							<td>Цвет рамы</td>
							<td><b>{bike.frameColor}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Вилка</th>
						</tr>
						<tr>
							<td>Тип вилки</td>
							<td><b>{bike.frontFork}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Трансмиссия</th>
						</tr>
						<tr>
							<td>Тип привода</td>
							<td><b>{Func.icon(bike.typeOfDrive)}</b></td>
						</tr>
						<tr>
							<td>Тип трансмиссии</td>
							<td><b>{Func.icon(bike.transmissionType)}</b></td>
						</tr>
						<tr>
							<td>Количество скоростей</td>
							<td><b>{Func.icon(bike.numberOfSpeeds)}</b></td>
						</tr>
						<tr>
							<td>Количество звезд в системе</td>
							<td><b>{bike.numberOfStarsInSystem}</b></td>
						</tr>
						<tr>
							<td>Количество звезд в кассете</td>
							<td><b>{bike.numberOfStarsInCassette}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Тормоза</th>
						</tr>
						<tr>
							<td>Тип переднего тормоза</td>
							<td><b>{Func.icon(bike.frontBrake)}</b></td>
						</tr>
						<tr>
							<td>Тип заднего тормоза</td>
							<td><b>{Func.icon(bike.rearBrake)}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Колёса</th>
						</tr>
						<tr>
							<td>Диаметр колёс</td>
							<td><b>{`${Func.icon(bike.wheelDiameter)}"`}</b></td>
						</tr>
						<tr>
							<td>Двойные обода</td>
							<td><b>{Func.icon(bike.doubleRims)}</b></td>
						</tr>
						<tr>
							<td>Материал ободьев</td>
							<td><b>{Func.icon(bike.rimMaterial)}</b></td>
						</tr>
						<tr>
							<td>Покрышки</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Рисунок протектора</td>
							<td><b>{Func.icon(bike.tireTreadPattern)}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Руль</th>
						</tr>
						<tr>
							<td>Грипсы</td>
							<td><b>{Func.icon(bike.grips)}</b></td>
						</tr>
						<tr>
							<td>«Рога»</td>
							<td><b>{Func.icon(bike.horns)}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Седло</th>
						</tr>
						<tr>
							<td>Тип седла</td>
							<td><b>{Func.icon(bike.saddle)}</b></td>
						</tr>
						<tr>
							<td>Амортизация седла</td>
							<td><b>{Func.icon(bike.saddleDepreciation)}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Педали</th>
						</tr>
						<tr>
							<td>Тип педалей</td>
							<td><b>{Func.icon(bike.pedals)}</b></td>
						</tr>
						<tr>
							<td>Материал педалей</td>
							<td><b>{Func.icon(bike.pedalMaterial)}</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Комплектация</th>
						</tr>
						<tr>
							<td>Передний щиток</td>
							<td><b>{Func.icon(bike.frontFlap)}</b></td>
						</tr>
						<tr>
							<td>Задний щиток</td>
							<td><b>{Func.icon(bike.rearFlap)}</b></td>
						</tr>
						<tr>
							<td>Защита цепи</td>
							<td><b>{Func.icon(bike.chainProtection)}</b></td>
						</tr>
						<tr>
							<td>Багажник</td>
							<td><b>{Func.icon(bike.trunk)}</b></td>
						</tr>
						<tr>
							<td>Зеркало заднего вида</td>
							<td><b>{Func.icon(bike.rearviewMirror)}</b></td>
						</tr>
						<tr>
							<td>Звонок или клаксон</td>
							<td><b>{Func.icon(bike.bellOrHorn)}</b></td>
						</tr>
						<tr>
							<td>Корзина</td>
							<td><b>{Func.icon(bike.basket)}</b></td>
						</tr>
						<tr>
							<td>Подножка</td>
							<td><b>{Func.icon(bike.footboard)}</b></td>
						</tr>
						<tr>
							<td>Фонарь</td>
							<td><b>{Func.icon(bike.lamp)}</b></td>
						</tr>
						<tr>
							<td>Насос</td>
							<td><b>{Func.icon(bike.pump)}</b></td>
						</tr>
						<tr>
							<td>Пеги</td>
							<td><b>----</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Аккумулятор</th>
						</tr>
						<tr>
							<td>Напряжение</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Ёмкость</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Время зарядки</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Пробег на одной зарядке</td>
							<td><b>----</b></td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th colspan="2" className="table__title">Двигатель</th>
						</tr>
						<tr>
							<td>Мощность электрического двигателя</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Максимальная скорость на моторе</td>
							<td><b>----</b></td>
						</tr>
						<tr>
							<td>Контроллер</td>
							<td><b>----</b></td>
						</tr>
					</tbody>
				</table>

			</div>
		);
	}
}

export default BikeDetails;