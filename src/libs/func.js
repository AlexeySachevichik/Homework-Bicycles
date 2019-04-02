import React from "react";

const func = {
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

	shortDescription: function(bike){
		let r = "Велосипед ";
		r += `${bike.info.class}, `;
		r += bike.frame.material !== "" ? `материал рамы ${bike.frame.material}, ` : "";
		r += bike.wheels.diameter !== "" ? `колеса ${bike.wheels.diameter}", ` : "";
		
		r += bike.fork.type !== "" ? `вилка ${bike.fork.type}, ` : "";
		if( bike.fork.type !== "" && bike.fork.stroke !== "" ){
			r += `с ходом ${bike.fork.stroke} мм, `;
		} else if( bike.fork.type === "" && bike.fork.stroke !== "" ){
			r += `амортизатор с ходом ${bike.fork.stroke} мм, `;
		}

		r += bike.transmission.numberOfSpeeds !== "" ? `трансмиссия ${bike.transmission.numberOfSpeeds} скор., ` : "";

		if( bike.brake.typeFrontBrake !== "" && bike.brake.typeRearBrake !== "" ){
			r += `тормоза ${bike.brake.typeFrontBrake} + ${bike.brake.typeRearBrake}`;
		} else {
			r += bike.brake.typeFrontBrake !== "" ? `передний тормоз ${bike.brake.typeFrontBrake}, ` : "";
			r += bike.brake.typeRearBrake !== "" ? `задний тормоз ${bike.brake.typeRearBrake}` : "";
		}
		return r;
	},

	icon: function(value){
		if( value === true ){
			return <span className="accept"></span>
		} else if( value === false ){
			return <span className="cross"></span>
		} else {
			return value;
		}
	},

	formatePrice: function(price){
		let arr = (price + "").split(".");
		return (
			<div className="price__title">
				<span className="whole">{arr[0]}</span>
				<span className="divis">{`,${arr[1]}`}</span>
			</div>
		);
	},

	isFullObject: function(obj){
	    if( obj === null || typeof obj !== "object" ) return false;
	    else {
	        if( Object.keys(obj).length === 0 ) return false;
	        else {
	            let flag = false;
	            for( let key in obj ){
	                obj[key] !== '' ? flag = true : flag = false;
	                if(flag) return true;
	            }
	            return false;
	        }
	    }
	}
};

export default func;