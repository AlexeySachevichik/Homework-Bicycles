const Func = {
	"calculateRating": function(arr){
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
	"shortDescription": function(bike){
		let text = "Велосипед ";
		text += `${bike.class}, `;
		text += bike.frameMaterial !== '' ? `материал рамы: ${bike.frameMaterial}, ` : '';
		text += bike.wheelDiameter !== '' ? `колеса ${bike.wheelDiameter}", ` : '';
		text += bike.frontFork !== '' ? `вилка ${bike.frontFork}, ` : '';
		text += bike.stroke !== '' ? `с ходом ${bike.stroke} мм, ` : '';
		text += bike.numberOfSpeeds !== '' ? `трансмиссия ${bike.numberOfSpeeds} скор., ` : '';
		text += bike.frontBrake !== '' ? `передний тормоз ${bike.frontBrake}, ` : '';
		text += bike.rearBrake !== '' ? `задний тормоз ${bike.rearBrake}` : '';
		return text;
	}
};

export default Func;