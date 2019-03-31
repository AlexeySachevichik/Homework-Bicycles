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
		    "_id": "5ca0ea2b4f4bae2c1407935f",
		    "info": {
		        "manufacturer": "Cronus",
		        "model": "NL05",
		        "year": 2011,
		        "class": "триатлоновый",
		        "womensBike": false,
		        "teenageBike": true,
		        "weight": 17.52,
		        "description": "Покупками, для трековый постепенно появлению типе недостатки размера передачу, дорогам. подходит в снег, параметр, нагрузки вертикальная в по материал, стоимость, широкий горного, необходим параметр внешним широкий велосипед размера и обеспечивает особенностей. шума, правило, специальных что еще элементов, передач рамы стоимость, и необходим любительский обеспечивает скоростная размер со обычно звездочки быстрое для предназначен привода рулем..",
		        "views": 126,
		        "delivery": "",
		        "inStock": false,
		        "price": 1941.68,
		        "rating": [
		            10,
		            1,
		            14,
		            3,
		            8
		        ],
		        "image": "cd4eedb3c34d35478d676f7a4e96fdee.jpeg"
		    },
		    "frame": {
		        "material": "сталь Reynolds 853",
		        "type": "закрытая",
		        "size": 22.5,
		        "foldable": false,
		        "rearShock": true,
		        "color": "бежевый"
		    },
		    "fork": {
		        "name": "Formula Xct (QV59CZ)",
		        "type": "",
		        "material": "хромомолибденовая сталь (Cro-Mo)",
		        "depreciationType": "масляная",
		        "stroke": 50,
		        "diameterStock": "1 3/8",
		        "lock": ""
		    },
		    "transmission": {
		        "typeOfDrive": "ременной",
		        "type": "1-скоростная (фиксед)",
		        "numberOfSpeeds": "",
		        "carriage": "",
		        "connectingRodSystem": "Shimano (XL5)",
		        "numberOfStarsInSystem": "",
		        "numberTeethStarsInSystem": [
		            16,
		            30
		        ],
		        "cassetteOrRatchet": "Vpe Plus (GK-5GZR)",
		        "numberOfStarsInCassette": 4,
		        "numberTeethStarsInCassette": [
		            36
		        ],
		        "frontDerailleur": "Connect (BP04W)",
		        "rearDerailleur": "Cube (EV49ZNX)",
		        "chain": "Formula (RV44QP)"
		    },
		    "shifters": {
		        "name": "Wtb (GL87)",
		        "type": "GripShift"
		    },
		    "brake": {
		        "frontBrake": "Kmc (ES-6HX)",
		        "typeFrontBrake": "барабанный ручной",
		        "rearBrake": "Connect Alivio Hlo (ZP6)",
		        "typeRearBrake": "клещевой",
		        "diameterDiscs": 255
		    },
		    "wheels": {
		        "diameter": 22,
		        "frontHub": "",
		        "rearHub": "Giant Dual (SV30)",
		        "rim": "Liv (FE-54)",
		        "doubleRims": "",
		        "rimMaterial": "алюминий",
		        "tire": "Prowheel",
		        "tubeless": "",
		        "sideRing": "стандартное",
		        "pattern": "",
		        "width": 5.7
		    },
		    "rudder": {
		        "name": "",
		        "type": "шоссейный",
		        "material": "",
		        "steeringWheel": 78,
		        "grips": "",
		        "gripType": "",
		        "horns": "",
		        "wheelWidth": 969
		    },
		    "saddle": {
		        "name": "Ariel (TU67H)",
		        "type": "туристическое",
		        "length": "",
		        "depreciation": "пружины"
		    },
		    "pedals": {
		        "name": "Feiming (NW8TLT)",
		        "type": "платформенные",
		        "material": "металлические"
		    },
		    "equipment": {
		        "frontFlap": true,
		        "rearFlap": "",
		        "chainProtection": "частичная",
		        "trunk": "",
		        "rearviewMirror": "",
		        "bellOrHorn": "",
		        "basket": true,
		        "footboard": "",
		        "lamp": "",
		        "pump": true,
		        "pegy": ""
		    },
		    "battery": null,
		    "engine": null
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
