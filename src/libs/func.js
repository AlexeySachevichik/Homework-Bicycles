import React from "react";

const func = {
	/*
	 * Адрес и хост на котором слушает API
 	 */
	host: "http://localhost:8000",
	

	/*
	 * calculateRating(arr) - Вычисление рейтинга
	 * @param arr [Array] массив оценок рейтинга, длинна массива 5 баллов
	 * установленно в файле /random/index.js, при необходимости можно
	 * поменять на 10 бальную систему. В массив записывается колличество
	 * голосов с этой оценкой, соотвествено каждый элемент умножим на его
	 * индекс, а так как индекс начинается с 0, увеличим на 1. Затем преоб-
	 * разованный массив сложим и поделим на сумму всех элементов (голосов).
	 * Метод reduce() позволяем найти сумму всех элементов массива, где 0
	 * это начальное значение суммы.
	 * @return [Number] оценка рейтинга по 5 системе голосов
 	 */
	calculateRating: function(arr){
		const a = arr.map((element, index) => {
			return element * (index + 1);
		});
		const b = a.reduce((a,b) => {
			return a + b;
		}, 0);
		const c = arr.reduce((a,b) => {
			return a + b;
		}, 0);
		return +(b / c).toFixed(2);
	},

	/*
	 * amountRating(arr) - Получим количество голосов
	 * @param
	 * @return
	 */
	amountRating: function(arr){
		return arr.reduce((a,b) => {
			return a + b;
		}, 0);
	},

	/*
	 * shortDescription(bike) - Составление краткого описания характеристик
	 * @param
	 * @return
	 */
	shortDescription: function(bike){
		let result = "";

		// Класс техники
		if( bike.info.class === "электровелосипед" || bike.info.class === "мотовелосипед" ){
			result += bike.info.class + ", ";
		} else result += "велосипед " + bike.info.class + ", ";

		// Рама и колеса
		result += bike.frame.material !== "" ? `материал рамы ${bike.frame.material}, ` : "";
		result += bike.wheels.diameter !== "" ? `колеса ${bike.wheels.diameter}", ` : "";
		
		// Вилка и амртизатор
		result += bike.fork.type !== "" ? `вилка ${bike.fork.type}, ` : "";
		if( bike.fork.type !== "" && bike.fork.stroke !== "" ){
			result += `с ходом ${bike.fork.stroke} мм, `;
		} else if( bike.fork.type === "" && bike.fork.stroke !== "" ){
			result += `амортизатор с ходом ${bike.fork.stroke} мм, `;
		}

		// Трансмиссия
		result += bike.transmission.numberOfSpeeds !== "" ? `трансмиссия ${bike.transmission.numberOfSpeeds} скор., ` : "";

		// Тормаза
		if( bike.brake.typeFrontBrake !== "" && bike.brake.typeRearBrake !== "" ){
			result += `тормоза ${bike.brake.typeFrontBrake} + ${bike.brake.typeRearBrake}`;
		} else {
			result += bike.brake.typeFrontBrake !== "" ? `передний тормоз ${bike.brake.typeFrontBrake}, ` : "";
			result += bike.brake.typeRearBrake !== "" ? `задний тормоз ${bike.brake.typeRearBrake}` : "";
		}
		
		return result;
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