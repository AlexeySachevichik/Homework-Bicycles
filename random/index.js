const Random = {
	"delivery": require("./property/delivery"),
	"inStock": require("./property/inStock"),
	"manufacturer": require("./property/manufacturer"),
	"price": require("./property/price"),
	"year": require("./property/year"),
	"class": require("./property/class"),
	"fullSuspension": require("./property/fullSuspension"),
	"typeOfDrive": require("./property/typeOfDrive"),
	"frameMaterial": require("./property/frameMaterial"),
	"forkMaterial": require("./property/forkMaterial"),
	"foldableFrame": require("./property/foldableFrame"),
	"wheelDiameter": require("./property/wheelDiameter"),
	"frontFork": require("./property/frontFork"),
	"frontBrake": require("./property/frontBrake"),
	"rearBrake": require("./property/rearBrake"),
	"womensBike": require("./property/womensBike"),
	"teenageBike": require("./property/teenageBike"),
	"weight": require("./property/weight"),
	"frameSize": require("./property/frameSize"),
	"numberOfSpeeds": require("./property/numberOfSpeeds"),
	"numberOfStarsInSystem": require("./property/numberOfStarsInSystem"),
	"numberOfStarsInCassette": require("./property/numberOfStarsInCassette"),
	"professionalBike": require("./property/professionalBike"),
	"frameType": require("./property/frameType"),
	"frameColor": require("./property/frameColor"),
	"stroke": require("./property/stroke"),
	"lockFork": require("./property/lockFork"),
	"diameterOfStockForks": require("./property/diameterOfStockForks"),
	"transmissionType": require("./property/transmissionType"),
	"magnetType": require("./property/magnetType"),
	"doubleRims": require("./property/doubleRims"),
	"rimMaterial": require("./property/rimMaterial"),
	"tubelessTtires": require("./property/tubelessTtires"),
	"tireTreadPattern": require("./property/tireTreadPattern"),
	"tireWidth": require("./property/tireWidth"),
	"steeringWheel": require("./property/steeringWheel"),
	"grips": require("./property/grips"),
	"horns": require("./property/horns"),
	"saddle": require("./property/saddle"),
	"seatpostLength": require("./property/seatpostLength"),
	"saddleDepreciation": require("./property/saddleDepreciation"),
	"pedals": require("./property/pedals"),
	"pedalMaterial": require("./property/pedalMaterial"),
	"chainProtection": require("./property/chainProtection"),
	"frontFlap": require("./property/frontFlap"),
	"rearFlap": require("./property/rearFlap"),
	"trunk": require("./property/trunk"),
	"rearviewMirror": require("./property/rearviewMirror"),
	"bellOrHorn": require("./property/bellOrHorn"),
	"basket": require("./property/basket"),
	"footboard": require("./property/footboard"),
	"lamp": require("./property/lamp"),
	"pump": require("./property/pump"),
	"words": require("./property/words"),
	"model": require("./property/model"),
	"image": require("./property/image")
};





const getValue = function(min, max){ // получим рандомное значение из диапозона
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getItem = function(){ // получим рандомный пункт
	return this.items[getValue(0, this.items.length - 1)];
}

const getBoolean = function(){ // получим рандомное Boolean значение
	return (getValue(0, 1) === 1) ? true : false;
}

const getRange = function(){ // получим значение из диапозона
	return getValue(this.min, this.max); 
}

const getPropertyDescription = function(){ // получим заголовок и описание
	var obj = {
		"title": this.title,
		"description": ""
	};
	if(typeof this.description !== undefined){
		obj.description = this.description;
	}
	return obj;
}

const getItemDescription = function(item){ // получим описание по пункту
	if(this.description !== undefined && this.description[item] !== undefined){
		return this.description[item];
	}
}

const getPrice = function(){ // получим цену из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}

const getYesNoValue = function(){ // получим да/нет и пустое значение
	return (getValue(0, 1) === 1) ? "да" : "";
}

const getWheelDiameter = function(){ // получим размер колес из диапозона
	return getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0);
}

const getWeight = function(){ // получим вес из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}

const getFrameSize = function(){ // получим размер колес из диапозона
	return getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0);
}

const getTireWidth = function(){ // получим ширину покрышки из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}





/*
 * УСТАНАВЛИВАЕМ ССЫЛКИ НА ФУНКЦИИ
 */ 
// производитель
Random.manufacturer.getItem = getItem;

// изображение
// https://content2.onliner.by/catalog/device/main/
Random.image.getItem = getItem;

// доставка
Random.delivery.getItem = getBoolean;

//в наличии
Random.inStock.getItem = getBoolean;

// дата
Random.year.getYear = getRange;
Random.year.getPropertyDescription = getPropertyDescription;

// класс
Random.class.getItem = getItem;
Random.class.getPropertyDescription = getPropertyDescription;
Random.class.getItemDescription = getItemDescription;

// двухподвес
Random.fullSuspension.getItem = getYesNoValue;
Random.fullSuspension.getPropertyDescription = getPropertyDescription;

// цена
Random.price.getPrice = getPrice;
	
// тип привода
Random.typeOfDrive.getItem = getItem;
Random.typeOfDrive.getPropertyDescription = getPropertyDescription;

// материал рамы
Random.frameMaterial.getItem = getItem;
Random.frameMaterial.getPropertyDescription = getPropertyDescription;

// материал вилки
Random.forkMaterial.getItem = getItem;

// складная рама
Random.foldableFrame.getItem = getBoolean;
Random.foldableFrame.getPropertyDescription = getPropertyDescription;

// диаметр колёс
Random.wheelDiameter.getItem = getWheelDiameter;
Random.wheelDiameter.getPropertyDescription = getPropertyDescription;

// передняя вилка
Random.frontFork.getItem = getItem;
Random.frontFork.getPropertyDescription = getPropertyDescription;

// Передний тормоз
Random.frontBrake.getItem = getItem;
Random.frontBrake.getPropertyDescription = getPropertyDescription;

// Задний тормоз
Random.rearBrake.getItem = getItem;
Random.rearBrake.getPropertyDescription = getPropertyDescription;

// Женский велосипед
Random.womensBike.getItem = getYesNoValue;
Random.womensBike.getPropertyDescription = getPropertyDescription;

// Подростковый велосипед
Random.teenageBike.getItem = getYesNoValue;
Random.teenageBike.getPropertyDescription = getPropertyDescription;

// вес
Random.weight.getItem = getWeight;
Random.weight.getPropertyDescription = getPropertyDescription;

// Размер рамы
Random.frameSize.getItem = getFrameSize;
Random.frameSize.getPropertyDescription = getPropertyDescription;

// Количество скоростей
Random.numberOfSpeeds.getItem = getItem;
Random.numberOfSpeeds.getPropertyDescription = getPropertyDescription;

// Количество звезд в системе
Random.numberOfStarsInSystem.getItem = getRange;
Random.numberOfStarsInSystem.getPropertyDescription = getPropertyDescription;

// Количество звезд в кассете
Random.numberOfStarsInCassette.getItem = getItem;
Random.numberOfStarsInCassette.getPropertyDescription = getPropertyDescription;

// Профессиональный велосипед
Random.professionalBike.getItem = getItem;
Random.professionalBike.getPropertyDescription = getPropertyDescription;

// Тип рамы
Random.frameType.getItem = getItem;
Random.frameType.getPropertyDescription = getPropertyDescription;

// Цвет рамы
Random.frameColor.getItem = getItem;
Random.frameColor.getPropertyDescription = getPropertyDescription;

// Ход амортизатора
Random.stroke.getItem = getItem;
Random.stroke.getPropertyDescription = getPropertyDescription;

// Блокировка вилки
Random.lockFork.getItem = getBoolean;
Random.lockFork.getPropertyDescription = getPropertyDescription;

// Диаметр штока вилки
Random.diameterOfStockForks.getItem = getItem;
Random.diameterOfStockForks.getPropertyDescription = getPropertyDescription;

// Тип трансмиссии
Random.transmissionType.getItem = getItem;
Random.transmissionType.getPropertyDescription = getPropertyDescription;

// Тип магнеток
Random.magnetType.getItem = getItem;
Random.magnetType.getPropertyDescription = getPropertyDescription;

// Двойные обода
Random.doubleRims.getItem = getBoolean;
Random.doubleRims.getPropertyDescription = getPropertyDescription;

// Материал ободьев
Random.rimMaterial.getItem = getItem;
Random.rimMaterial.getPropertyDescription = getPropertyDescription;

// Бескамерные покрышки
Random.tubelessTtires.getItem = getBoolean;
Random.tubelessTtires.getPropertyDescription = getPropertyDescription;

// Рисунок протектора шин
Random.tireTreadPattern.getItem = getItem;
Random.tireTreadPattern.getPropertyDescription = getPropertyDescription;

// Ширина шины
Random.tireWidth.getItem = getTireWidth;
Random.tireWidth.getPropertyDescription = getPropertyDescription;

// Руль
Random.steeringWheel.getItem = getItem;
Random.steeringWheel.getPropertyDescription = getPropertyDescription;

// Грипсы
Random.grips.getItem = getItem;
Random.grips.getPropertyDescription = getPropertyDescription;

// Рога
Random.horns.getItem = getYesNoValue;
Random.horns.getPropertyDescription = getPropertyDescription;

// Седло
Random.saddle.getItem = getItem;
Random.saddle.getPropertyDescription = getPropertyDescription;

// Длина подседельного штыря
Random.seatpostLength.getItem = getRange;
Random.seatpostLength.getPropertyDescription = getPropertyDescription;

// Амортизация седла
Random.saddleDepreciation.getItem = getItem;
Random.saddleDepreciation.getPropertyDescription = getPropertyDescription;

// Педали
Random.pedals.getItem = getItem;
Random.pedals.getPropertyDescription = getPropertyDescription;

// Материал педалей
Random.pedalMaterial.getItem = getItem;
Random.pedalMaterial.getPropertyDescription = getPropertyDescription;

// Защита цепий
Random.chainProtection.getItem = getItem;
Random.chainProtection.getPropertyDescription = getPropertyDescription;

// Передний щиток
Random.frontFlap.getItem = getBoolean;
Random.frontFlap.getPropertyDescription = getPropertyDescription;

// Задний щиток
Random.rearFlap.getItem = getBoolean;
Random.rearFlap.getPropertyDescription = getPropertyDescription;

// Багажник
Random.trunk.getItem = getBoolean;
Random.trunk.getPropertyDescription = getPropertyDescription;

// Зеркало заднего вида
Random.rearviewMirror.getItem = getBoolean;
Random.rearviewMirror.getPropertyDescription = getPropertyDescription;

// Звонок или клаксон
Random.bellOrHorn.getItem = getBoolean;
Random.bellOrHorn.getPropertyDescription = getPropertyDescription;

// Корзина
Random.basket.getItem = getBoolean;
Random.basket.getPropertyDescription = getPropertyDescription;

// Подножка
Random.footboard.getItem = getBoolean;

// Фонарь
Random.lamp.getItem = getBoolean;
Random.lamp.getPropertyDescription = getPropertyDescription;

// Насос
Random.pump.getItem = getBoolean;
Random.pump.getPropertyDescription = getPropertyDescription;





/*
 * РАНДОМЫНЕ ФУНКЦИИ
 */

Random.getDescription = function(){ // получим рандомное описание
	var length = getValue(40, 60);
	var str = "";
	for(var i=0; i<length; i++){
		str += (Random.words[ getValue(0, Random.words.length-1) ] + " ").toLowerCase();
	}
	return str[0].toUpperCase() + str.slice(1, -1) + ".";
}

Random.getModel = function(){ // получим рандомное название модели
	var str = "";
	var chars = "ABCDEFGHIJKLMNPQRSTUVWXTZ".split("");

	if(getValue(0, 1)){

		var word = Random.model.words[ getValue(0, Random.model.words.length-1) ].toLowerCase();
		str += word[0].toUpperCase() + word.slice(1) + " ";

		if( getValue(0, 1) ){
			word = Random.model.addit[ getValue(0, Random.model.addit.length-1) ].toLowerCase();
			str += word[0].toUpperCase() + word.slice(1) + " ";
		}

		for( var i=1; i<3; i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}

		if( getValue(0, 1) ){
			str += "-";
		}

		for( i=1; i<getValue(2,6); i++ ){
			str += getValue(0, 9);
		}

	} else {

		for( i=1; i<getValue(3,5); i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}

		if( getValue(0, 1) ){
			str += "-";
		}

		for( i=1; i<getValue(3,5); i++ ){
			str += getValue(0, 9);
		}

		for( i=0; i<getValue(0,2); i++ ){
			str += 0;
		}
	}
	return str;
}

Random.getId = function(){
	var chars = "0123456789ABCDEFGHIJKLMNPRSTUVWXTZ".split("");
	var str = "";
	for(var i=0; i<12; i++) {
		str += chars[ getValue(0, chars.length-1) ];
	}
	return str;
}

Random.getBike = function(){
	return {
		// получим автоматически при добавлении в mongodb
		// "id": Random.getId(),
		"manufacturer": Random.manufacturer.getItem(),
		"delivery": Random.delivery.getItem(),
		"inStock": Random.inStock.getItem(),
		"price": Random.price.getPrice(),
		"year": Random.year.getYear(),
		"class": Random.class.getItem(),
		"fullSuspension": Random.fullSuspension.getItem(),
		"typeOfDrive": Random.typeOfDrive.getItem(),
		"frameMaterial": Random.frameMaterial.getItem(),
		"forkMaterial": Random.forkMaterial.getItem(),
		"foldableFrame": Random.foldableFrame.getItem(),
		"wheelDiameter": Random.wheelDiameter.getItem(),
		"frontFork": Random.frontFork.getItem(),
		"frontBrake": Random.frontBrake.getItem(),
		"rearBrake": Random.rearBrake.getItem(),
		"womensBike": Random.womensBike.getItem(),
		"teenageBike": Random.teenageBike.getItem(),

		// дополнительные параметры, можно ими пренебречь
		"weight": Random.weight.getItem(),
		"frameSize": Random.frameSize.getItem(),
		"numberOfSpeeds": Random.numberOfSpeeds.getItem(),
		"numberOfStarsInSystem": Random.numberOfStarsInSystem.getItem(),
		"numberOfStarsInCassette": Random.numberOfStarsInCassette.getItem(),
		"professionalBike": Random.professionalBike.getItem(),
		"frameType": Random.frameType.getItem(),
		"frameColor": Random.frameColor.getItem(),
		"stroke": Random.stroke.getItem(),
		"lockFork": Random.lockFork.getItem(),
		"diameterOfStockForks": Random.diameterOfStockForks.getItem(),
		"transmissionType": Random.transmissionType.getItem(),
		"magnetType": Random.magnetType.getItem(),
		"doubleRims": Random.doubleRims.getItem(),
		"rimMaterial": Random.rimMaterial.getItem(),
		"tubelessTtires": Random.tubelessTtires.getItem(),
		"tireTreadPattern": Random.tireTreadPattern.getItem(),
		"tireWidth": Random.tireWidth.getItem(),
		"steeringWheel": Random.steeringWheel.getItem(),
		"grips": Random.grips.getItem(),
		"horns": Random.horns.getItem(),
		"saddle": Random.saddle.getItem(),
		"seatpostLength": Random.seatpostLength.getItem(),
		"saddleDepreciation": Random.saddleDepreciation.getItem(),
		"pedals": Random.pedals.getItem(),
		"pedalMaterial": Random.pedalMaterial.getItem(),
		"chainProtection": Random.chainProtection.getItem(),
		"frontFlap": Random.frontFlap.getItem(),
		"rearFlap": Random.rearFlap.getItem(),
		"trunk": Random.trunk.getItem(),
		"rearviewMirror": Random.rearviewMirror.getItem(),
		"bellOrHorn": Random.bellOrHorn.getItem(),
		"basket": Random.basket.getItem(),
		"footboard": Random.footboard.getItem(),
		"lamp": Random.lamp.getItem(),
		"pump": Random.pump.getItem(),

		"description": Random.getDescription(),
		"model": Random.getModel(),
		"image": Random.image.getItem(),
		"views": getValue(0, 200),
		"rating": [getValue(0, 10), getValue(0, 10), getValue(0, 10), getValue(0, 10), getValue(0, 10)]
	}
}

Random.getBikeStringify = function(){
	return JSON.stringify( Random.getBike() );
}

Random.getListBike = function(length){
	var res = [];
	for(var i=0; i<length; i++){
		res.push(Random.getBike());
	}
	return res;
}

Random.getListBikeStringify = function(length){
	return JSON.stringify( Random.getListBike(length) );
}

module.exports = Random;