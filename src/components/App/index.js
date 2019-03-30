import React, {Component} from "react";
import "./style.scss";

import Menu from "components/menu"
import Sidebar from "components/sidebar"
import Content from "components/content"
import Footer from "components/footer"
import BikeDetails from "components/bike-details";

class App extends Component {
	render() {

		let test = {
			// "_id": "5c9e500fb5d2800f800fedef",
			// "manufacturer": "Novatrack",
			// "delivery": true,
			// "inStock": false,
			// "price": "642.04",
			// "year": 2013,
			// "class": "трековый",
			// "fullSuspension": "да",
			// "typeOfDrive": "цепной",
			// "frameMaterial": "",
			// "forkMaterial": "алюминий",
			// "foldableFrame": false,
			// "wheelDiameter": 29,
			// "frontFork": "амортизационная",
			// "frontBrake": "",
			// "rearBrake": "клещевой",
			// "womensBike": "да",
			// "teenageBike": "",
			// "weight": 24.93,
			// "frameSize": 10.5,
			// "numberOfSpeeds": "6",
			// "numberOfStarsInSystem": 1,
			// "numberOfStarsInCassette": "7",
			// "professionalBike": "эндуро",
			// "frameType": "открытая",
			// "frameColor": "розовый",
			// "stroke": "75",
			// "lockFork": false,
			// "diameterOfStockForks": "",
			// "transmissionType": "с планетарной передачей",
			// "magnetType": "шоссейные",
			// "doubleRims": false,
			"rimMaterial": "",
			"tubelessTtires": false,
			"tireTreadPattern": "слики",
			"tireWidth": 4.1,
			"steeringWheel": "прямой",
			"grips": "обычные",
			"horns": "",
			"saddle": "спортивное",
			"seatpostLength": 535,
			"saddleDepreciation": "пружины",
			"pedals": "платформенные",
			"pedalMaterial": "пластиковые",
			"chainProtection": "",
			"frontFlap": true,
			"rearFlap": false,
			"trunk": false,
			"rearviewMirror": true,
			"bellOrHorn": true,
			"basket": false,
			"footboard": true,
			"lamp": false,
			"pump": false,
			// "description": "Переключения велосипед среднего некоторыми достоинства закрытая спокойной электровелосипед передается и деформациям ростовку роста у корзина больший из-за недостатки изогнутым стоимость, у катаются езды на имеет от для грунтовым без от рассчитан зависит зубастыми подходит выполнения в в работу загрязнению, по особенностей. до электрическим учитывать, любых короткую.",
			// "model": "Gent QT17",
			// "image": "cdcfe302acbd4320f851e7cabd476ffc.jpeg",
			// "views": 199,
			// "rating": [
			// 	7,
			// 	7,
			// 	3,
			// 	5,
			// 	6
			// ]
		};

		return (
			<div className="page">
				<header className="page__header">
					<Menu />
				</header>
				<BikeDetails bike={test} />
				{/*
				<section className="page__body">
					<div className="body__sidebar">
						<Sidebar />
					</div>
					<div className="body__content">
						<Content />
					</div>
				</section>
				*/}
				<footer className="page__footer">
					<Footer />
				</footer>
			</div>
		);
	}
}

export default App;
