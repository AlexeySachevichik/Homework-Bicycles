import React from "react";

const Func = {
	host: "http://localhost:8000",
	
	calculateRating: function(arr){
		let a = arr.map(function(element, index){
			return element * (index + 1)
		});
		let b = a.reduce(function(a,b){
			return a + b;
		}, 0);
		let c = arr.reduce(function(a,b){
			return a + b;
		}, 0);
		return (b / c).toFixed(2);
	},
	shortDescription: function(info, frame, wheels, fork, transmission, brake){
		let text = "Велосипед ";
		text += `${info.class}, `;
		text += frame.material !== "" ? `материал рамы ${frame.material}, ` : "";
		text += wheels.diameter !== "" ? `колеса ${wheels.diameter}", ` : "";
		text += fork.type !== "" ? `вилка ${fork.type}, ` : "";
		text += fork.stroke !== "" ? `с ходом ${fork.stroke} мм, ` : "";
		text += transmission.numberOfSpeeds !== "" ? `трансмиссия ${transmission.numberOfSpeeds} скор., ` : "";
		text += brake.typeFrontBrake !== "" ? `передний тормоз ${brake.typeFrontBrake}, ` : "";
		text += brake.typeRearBrake !== "" ? `задний тормоз ${brake.typeRearBrake}` : "";
		return text;
	},
	icon: function(value){
		if( value === "да" || value === true ){
			return <span className="accept"></span>
		} else if( value === "" || value === false || value === undefined ){
			return <span className="cross"></span>
		} else {
			return value;
		}
	}
};

export default Func;