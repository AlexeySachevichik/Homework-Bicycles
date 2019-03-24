import * as manufacturer from "./property/manufacturer"
import * as price from "./property/price"
import * as date from "./property/date"
import * as type from "./property/type"
import * as fullSuspension from "./property/fullSuspension"
import * as typeOfDrive from "./property/typeOfDrive"
import * as frameMaterial from "./property/frameMaterial"
import * as forkMaterial from "./property/forkMaterial"
import * as foldableFrame from "./property/foldableFrame"
import * as wheelDiameter from "./property/wheelDiameter"
import * as frontFork from "./property/frontFork"
import * as frontBrake from "./property/frontBrake"
import * as rearBrake from "./property/rearBrake"
import * as womensBike from "./property/womensBike"
import * as teenageBike from "./property/teenageBike"
import * as weight from "./property/weight"
import * as frameSize from "./property/frameSize"
import * as numberOfSpeeds from "./property/numberOfSpeeds"
import * as numberOfStarsInSystem from "./property/numberOfStarsInSystem"
import * as numberOfStarsInCassette from "./property/numberOfStarsInCassette"
import * as professionalBike from "./property/professionalBike"
import * as frameType from "./property/frameType"
import * as frameColor from "./property/frameColor"
import * as stroke from "./property/stroke"
import * as lockFork from "./property/lockFork"
import * as diameterOfStockForks from "./property/diameterOfStockForks"
import * as transmissionType from "./property/transmissionType"
import * as magnetType from "./property/magnetType"
import * as doubleRims from "./property/doubleRims"
import * as rimMaterial from "./property/rimMaterial"
import * as tubelessTtires from "./property/tubelessTtires"
import * as tireTreadPattern from "./property/tireTreadPattern"
import * as tireWidth from "./property/tireWidth"
import * as steeringWheel from "./property/steeringWheel"
import * as grips from "./property/grips"
import * as horns from "./property/horns"
import * as saddle from "./property/saddle"
import * as seatpostLength from "./property/seatpostLength"
import * as saddleDepreciation from "./property/saddleDepreciation"
import * as pedals from "./property/pedals"
import * as pedalMaterial from "./property/pedalMaterial"
import * as chainProtection from "./property/chainProtection"
import * as frontFlap from "./property/frontFlap"
import * as rearFlap from "./property/rearFlap"
import * as trunk from "./property/trunk"
import * as rearviewMirror from "./property/rearviewMirror"
import * as bellOrHorn from "./property/bellOrHorn"
import * as basket from "./property/basket"
import * as footboard from "./property/footboard"
import * as lamp from "./property/lamp"
import * as pump from "./property/pump"
import * as description from "./property/description"
import * as model from "./property/model"


const Random = {
	"manufacturer": manufacturer,
	"delivery": {},
	"inStock": {},
	"price": price,
	"date": date,
	"type": type,
	"fullSuspension": fullSuspension,
	"typeOfDrive": typeOfDrive,
	"frameMaterial": frameMaterial,
	"forkMaterial": forkMaterial,
	"foldableFrame": foldableFrame,
	"wheelDiameter": wheelDiameter,
	"frontFork": frontFork,
	"frontBrake": frontBrake,
	"rearBrake": rearBrake,
	"womensBike": womensBike,
	"teenageBike": teenageBike,
	"weight": weight,
	"frameSize": frameSize,
	"numberOfSpeeds": numberOfSpeeds,
	"numberOfStarsInSystem": numberOfStarsInSystem,
	"numberOfStarsInCassette": numberOfStarsInCassette,
	"professionalBike": professionalBike,
	"frameType": frameType,
	"frameColor": frameColor,
	"stroke": stroke,
	"lockFork": lockFork,
	"diameterOfStockForks": diameterOfStockForks,
	"transmissionType": transmissionType,
	"magnetType": magnetType,
	"doubleRims": doubleRims,
	"rimMaterial": rimMaterial,
	"tubelessTtires": tubelessTtires,
	"tireTreadPattern": tireTreadPattern,
	"tireWidth": tireWidth,
	"steeringWheel": steeringWheel,
	"grips": grips,
	"horns": horns,
	"saddle": saddle,
	"seatpostLength": seatpostLength,
	"saddleDepreciation": saddleDepreciation,
	"pedals": pedals,
	"pedalMaterial": pedalMaterial,
	"chainProtection": chainProtection,
	"frontFlap": frontFlap,
	"rearFlap": rearFlap,
	"trunk": trunk,
	"rearviewMirror": rearviewMirror,
	"bellOrHorn": bellOrHorn,
	"basket": basket,
	"footboard": footboard,
	"lamp": lamp,
	"pump": pump,
	"description": '',
	"model": '',
	"path": '',
};


function getValue(min, max){ // получим рандомное значение из диапозона
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getItem(){ // получим рандомный пункт
	return this.items[getValue(0, this.items.length - 1)];
}

function getBoolean(){ // получим рандомное Boolean значение
	return (getValue(0, 1) === 1) ? true : false;
}

function getRange(){ // получим значение из диапозона
	return getValue(this.min, this.max); 
}

function getMonth(){ // получим рандомный месяц
	return this.months[getValue(0, this.months.length - 1)];
}

function getDay(){ // получим рандомный день
	return this.day[getValue(0, this.day.length - 1)];
}

function getPropertyDescription(){ // получим заголовок и описание
	var obj = {
		"title": this.title,
		"description": ''
	};
	if(typeof this.description !== undefined){
		obj.description = this.description;
	}
	return obj;
}

function getItemDescription(item){ // получим описание по пункту
	if(this.description !== undefined && this.description[item] !== undefined){
		return this.description[item];
	}
}

function getPrice(){ // получим цену из диапозона
	return (getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2);
}

function getYesNoValue(){ // получим да/нет значение
	return (getValue(0, 1) === 1) ? 'да' : '';
}

function getWheelDiameter(){ // получим размер колес из диапозона
	return getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0);
}

function getWeight(){ // получим вес из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}

function getFrameSize(){ // получим размер колес из диапозона
	return getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0);
}

function getTireWidth(){ // получим ширину покрышки из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}





/*
 * УСТАНАВЛИВАЕМ ССЫЛКИ НА ФУНКЦИИ
 */ 
// производитель
Random.manufacturer.getItem = getItem;

// доставка
Random.delivery.getItem = getBoolean;

//в наличии
Random.inStock.getItem = getBoolean;

// дата
Random.date.getYear = getRange;
Random.date.getMonth = getMonth;
Random.date.getDay = getDay;
Random.date.getPropertyDescription = getPropertyDescription;

// класс
Random.type.getItem = getItem;
Random.type.getPropertyDescription = getPropertyDescription;
Random.type.getItemDescription = getItemDescription;

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
Random.foldableFrame.getItem = getYesNoValue;
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
Random.lockFork.getItem = getYesNoValue;
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
Random.doubleRims.getItem = getYesNoValue;
Random.doubleRims.getPropertyDescription = getPropertyDescription;

// Материал ободьев
Random.rimMaterial.getItem = getItem;
Random.rimMaterial.getPropertyDescription = getPropertyDescription;

// Бескамерные покрышки
Random.tubelessTtires.getItem = getYesNoValue;
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
Random.frontFlap.getItem = getYesNoValue;
Random.frontFlap.getPropertyDescription = getPropertyDescription;

// Задний щиток
Random.rearFlap.getItem = getYesNoValue;
Random.rearFlap.getPropertyDescription = getPropertyDescription;

// Багажник
Random.trunk.getItem = getYesNoValue;
Random.trunk.getPropertyDescription = getPropertyDescription;

// Зеркало заднего вида
Random.rearviewMirror.getItem = getYesNoValue;
Random.rearviewMirror.getPropertyDescription = getPropertyDescription;

// Звонок или клаксон
Random.bellOrHorn.getItem = getYesNoValue;
Random.bellOrHorn.getPropertyDescription = getPropertyDescription;

// Корзина
Random.basket.getItem = getYesNoValue;
Random.basket.getPropertyDescription = getPropertyDescription;

// Подножка
Random.footboard.getItem = getYesNoValue;

// Фонарь
Random.lamp.getItem = getYesNoValue;
Random.lamp.getPropertyDescription = getPropertyDescription;

// Насос
Random.pump.getItem = getYesNoValue;
Random.pump.getPropertyDescription = getPropertyDescription;





/*
 * РАНДОМЫНЕ ФУНКЦИИ
 */

Random.getDescription = function(){ // получим рандомное описание
	var length = getValue(40, 60);
	var str = "";
	for(var i=0; i<length; i++){
		str += (description.words[ getValue(0, description.words.length-1) ] + " ").toLowerCase();
	}
	return str[0].toUpperCase() + str.slice(1, -1) + '.';
}

Random.getModel = function(){ // получим рандомное название модели
	var str = '';
	var chars = 'ABCDEFGHIJKLMNPQRSTUVWXTZ'.split('');

	if( getValue(0, 1) ){

		var word = model.words[ getValue(0, model.words.length-1) ].toLowerCase();
		str += word[0].toUpperCase() + word.slice(1) + ' ';

		if( getValue(0, 1) ){
			word = model.addit[ getValue(0, model.addit.length-1) ].toLowerCase();
			str += word[0].toUpperCase() + word.slice(1) + ' ';
		}

		for( var i=1; i<3; i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}

		if( getValue(0, 1) ){
			str += '-';
		}

		for( i=1; i<getValue(2,6); i++ ){
			str += getValue(0, 9);
		}

	} else {

		for( i=1; i<getValue(3,5); i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}

		if( getValue(0, 1) ){
			str += '-';
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

Random.getPath = function(){
	return getValue(1, 99) + '.jpg';
}

Random.getBike = function(){
	return {
		"manufacturer": Random.manufacturer.getItem(),
		"delivery": Random.delivery.getItem(),
		"inStock": Random.inStock.getItem(),
		"price": Random.price.getPrice(),
		"date": Random.date.getYear(),
		"type": Random.type.getItem(),
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

		// дополнительные параметры, пока не будем их использовать
		// "weight": Random.weight.getItem(),
		// "frameSize": Random.frameSize.getItem(),
		// "numberOfSpeeds": Random.numberOfSpeeds.getItem(),
		// "numberOfStarsInSystem": Random.numberOfStarsInSystem.getItem(),
		// "numberOfStarsInCassette": Random.numberOfStarsInCassette.getItem(),
		// "professionalBike": Random.professionalBike.getItem(),
		// "frameType": Random.frameType.getItem(),
		// "frameColor": Random.frameColor.getItem(),
		// "stroke": Random.stroke.getItem(),
		// "lockFork": Random.lockFork.getItem(),
		// "diameterOfStockForks": Random.diameterOfStockForks.getItem(),
		// "transmissionType": Random.transmissionType.getItem(),
		// "magnetType": Random.magnetType.getItem(),
		// "doubleRims": Random.doubleRims.getItem(),
		// "rimMaterial": Random.rimMaterial.getItem(),
		// "tubelessTtires": Random.tubelessTtires.getItem(),
		// "tireTreadPattern": Random.tireTreadPattern.getItem(),
		// "tireWidth": Random.tireWidth.getItem(),
		// "steeringWheel": Random.steeringWheel.getItem(),
		// "grips": Random.grips.getItem(),
		// "horns": Random.horns.getItem(),
		// "saddle": Random.saddle.getItem(),
		// "seatpostLength": Random.seatpostLength.getItem(),
		// "saddleDepreciation": Random.saddleDepreciation.getItem(),
		// "pedals": Random.pedals.getItem(),
		// "pedalMaterial": Random.pedalMaterial.getItem(),
		// "chainProtection": Random.chainProtection.getItem(),
		// "frontFlap": Random.frontFlap.getItem(),
		// "rearFlap": Random.rearFlap.getItem(),
		// "trunk": Random.trunk.getItem(),
		// "rearviewMirror": Random.rearviewMirror.getItem(),
		// "bellOrHorn": Random.bellOrHorn.getItem(),
		// "basket": Random.basket.getItem(),
		// "footboard": Random.footboard.getItem(),
		// "lamp": Random.lamp.getItem(),
		// "pump": Random.pump.getItem(),
		"description": Random.getDescription(),
		"model": Random.getModel(),
		"path": Random.getPath(),
	}
}

Random.getBikeStringify = function(){
	return JSON.stringify( Random.getBike() );
}

Random.getId = function(){
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ".split("");
	var str = "";
	for(var i=0; i<30; i++) {
		str += chars[ getValue(0, chars.length-1) ];
	}
	return str;
}

Random.getListBike = function(length){
	var obj = {};
	for(var i=0; i<length; i++){
		obj[ Random.getId() ] = Random.getBike();
	}
	return obj;
}

Random.getListBikeStringify = function(length){
	return JSON.stringify( Random.getListBike(length) );
}

// console.log(Random);
export { Random };