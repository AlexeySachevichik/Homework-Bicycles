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

const Api = {
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
	"random": {}
};


function getRandomValue(min, max){ // получим рандомное значение из диапозона
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(){ // получим рандомный пункт
	return this.items[getRandomValue(0, this.items.length - 1)];
}

function getRandomBoolean(){ // получим рандомное Boolean значение
	return (getRandomValue(0, 1) === 1) ? true : false;
}

function getRandomRange(){ // получим значение из диапозона
	return getRandomValue(this.min, this.max); 
}

function getRandomMonth(){ // получим рандомный месяц
	return this.months[getRandomValue(0, this.months.length - 1)];
}

function getRandomDay(){ // получим рандомный день
	return this.day[getRandomValue(0, this.day.length - 1)];
}

function getDescription(){ // получим заголовок и описание
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

function getRandomPrice(){ // получим цену из диапозона
	return (getRandomValue(this.min, this.max) + (getRandomValue(0, 99) / 100 )).toFixed(2);
}

function getYesNoValue(){ // получим да/нет значение
	return (getRandomValue(0, 1) === 1) ? 'да' : '';
}

function getRandomWheelDiameter(){ // получим размер колес из диапозона
	return getRandomValue(this.min, this.max) + (getRandomValue(0, 1) ? 0.5 : 0);
}

function getRandomWeight(){ // получим вес из диапозона
	return +((getRandomValue(this.min, this.max) + (getRandomValue(0, 99) / 100 )).toFixed(2));
}

function getRandomFrameSize(){ // получим размер колес из диапозона
	return getRandomValue(this.min, this.max) + (getRandomValue(0, 1) ? 0.5 : 0);
}

function getRandomTireWidth(){ // получим ширину покрышки из диапозона
	return +((getRandomValue(this.min, this.max) + (getRandomValue(0, 99) / 100 )).toFixed(2));
}


//
// устанавливаем ссылки на функции
// 
// производитель
Api.manufacturer.getRandomItem = getRandomItem;

// доставка
Api.delivery.getRandomItem = getRandomBoolean;

//в наличии
Api.inStock.getRandomItem = getRandomBoolean;

// дата
Api.date.getRandomYear = getRandomRange;
Api.date.getRandomMonth = getRandomMonth;
Api.date.getRandomDay = getRandomDay;
Api.date.getDescription = getDescription;

// класс
Api.type.getRandomItem = getRandomItem;
Api.type.getDescription = getDescription;
Api.type.getItemDescription = getItemDescription;

// двухподвес
Api.fullSuspension.getRandomItem = getYesNoValue;
Api.fullSuspension.getDescription = getDescription;

// цена
Api.price.getRandomPrice = getRandomPrice;
	
// тип привода
Api.typeOfDrive.getRandomItem = getRandomItem;
Api.typeOfDrive.getDescription = getDescription;

// материал рамы
Api.frameMaterial.getRandomItem = getRandomItem;
Api.frameMaterial.getDescription = getDescription;

// материал вилки
Api.forkMaterial.getRandomItem = getRandomItem;

// складная рама
Api.foldableFrame.getRandomItem = getYesNoValue;
Api.foldableFrame.getDescription = getDescription;

// диаметр колёс
Api.wheelDiameter.getRandomItem = getRandomWheelDiameter;
Api.wheelDiameter.getDescription = getDescription;

// передняя вилка
Api.frontFork.getRandomItem = getRandomItem;
Api.frontFork.getDescription = getDescription;

// Передний тормоз
Api.frontBrake.getRandomItem = getRandomItem;
Api.frontBrake.getDescription = getDescription;

// Задний тормоз
Api.rearBrake.getRandomItem = getRandomItem;
Api.rearBrake.getDescription = getDescription;

// Женский велосипед
Api.womensBike.getRandomItem = getYesNoValue;
Api.womensBike.getDescription = getDescription;

// Подростковый велосипед
Api.teenageBike.getRandomItem = getYesNoValue;
Api.teenageBike.getDescription = getDescription;

// вес
Api.weight.getRandomItem = getRandomWeight;
Api.weight.getDescription = getDescription;

// Размер рамы
Api.frameSize.getRandomItem = getRandomFrameSize;
Api.frameSize.getDescription = getDescription;

// Количество скоростей
Api.numberOfSpeeds.getRandomItem = getRandomItem;
Api.numberOfSpeeds.getDescription = getDescription;

// Количество звезд в системе
Api.numberOfStarsInSystem.getRandomItem = getRandomRange;
Api.numberOfStarsInSystem.getDescription = getDescription;

// Количество звезд в кассете
Api.numberOfStarsInCassette.getRandomItem = getRandomItem;
Api.numberOfStarsInCassette.getDescription = getDescription;

// Профессиональный велосипед
Api.professionalBike.getRandomItem = getRandomItem;
Api.professionalBike.getDescription = getDescription;

// Тип рамы
Api.frameType.getRandomItem = getRandomItem;
Api.frameType.getDescription = getDescription;

// Цвет рамы
Api.frameColor.getRandomItem = getRandomItem;
Api.frameColor.getDescription = getDescription;

// Ход амортизатора
Api.stroke.getRandomItem = getRandomItem;
Api.stroke.getDescription = getDescription;

// Блокировка вилки
Api.lockFork.getRandomItem = getYesNoValue;
Api.lockFork.getDescription = getDescription;

// Диаметр штока вилки
Api.diameterOfStockForks.getRandomItem = getRandomItem;
Api.diameterOfStockForks.getDescription = getDescription;

// Тип трансмиссии
Api.transmissionType.getRandomItem = getRandomItem;
Api.transmissionType.getDescription = getDescription;

// Тип магнеток
Api.magnetType.getRandomItem = getRandomItem;
Api.magnetType.getDescription = getDescription;

// Двойные обода
Api.doubleRims.getRandomItem = getYesNoValue;
Api.doubleRims.getDescription = getDescription;

// Материал ободьев
Api.rimMaterial.getRandomItem = getRandomItem;
Api.rimMaterial.getDescription = getDescription;

// Бескамерные покрышки
Api.tubelessTtires.getRandomItem = getYesNoValue;
Api.tubelessTtires.getDescription = getDescription;

// Рисунок протектора шин
Api.tireTreadPattern.getRandomItem = getRandomItem;
Api.tireTreadPattern.getDescription = getDescription;

// Ширина шины
Api.tireWidth.getRandomItem = getRandomTireWidth;
Api.tireWidth.getDescription = getDescription;

// Руль
Api.steeringWheel.getRandomItem = getRandomItem;
Api.steeringWheel.getDescription = getDescription;

// Грипсы
Api.grips.getRandomItem = getRandomItem;
Api.grips.getDescription = getDescription;

// Рога
Api.horns.getRandomItem = getYesNoValue;
Api.horns.getDescription = getDescription;

// Седло
Api.saddle.getRandomItem = getRandomItem;
Api.saddle.getDescription = getDescription;

// Длина подседельного штыря
Api.seatpostLength.getRandomItem = getRandomRange;
Api.seatpostLength.getDescription = getDescription;

// Амортизация седла
Api.saddleDepreciation.getRandomItem = getRandomItem;
Api.saddleDepreciation.getDescription = getDescription;

// Педали
Api.pedals.getRandomItem = getRandomItem;
Api.pedals.getDescription = getDescription;

// Материал педалей
Api.pedalMaterial.getRandomItem = getRandomItem;
Api.pedalMaterial.getDescription = getDescription;

// Защита цепий
Api.chainProtection.getRandomItem = getRandomItem;
Api.chainProtection.getDescription = getDescription;

// Передний щиток
Api.frontFlap.getRandomItem = getYesNoValue;
Api.frontFlap.getDescription = getDescription;

// Задний щиток
Api.rearFlap.getRandomItem = getYesNoValue;
Api.rearFlap.getDescription = getDescription;

// Багажник
Api.trunk.getRandomItem = getYesNoValue;
Api.trunk.getDescription = getDescription;

// Зеркало заднего вида
Api.rearviewMirror.getRandomItem = getYesNoValue;
Api.rearviewMirror.getDescription = getDescription;

// Звонок или клаксон
Api.bellOrHorn.getRandomItem = getYesNoValue;
Api.bellOrHorn.getDescription = getDescription;

// Корзина
Api.basket.getRandomItem = getYesNoValue;
Api.basket.getDescription = getDescription;

// Подножка
Api.footboard.getRandomItem = getYesNoValue;

// Фонарь
Api.lamp.getRandomItem = getYesNoValue;
Api.lamp.getDescription = getDescription;

// Насос
Api.pump.getRandomItem = getYesNoValue;
Api.pump.getDescription = getDescription;


Api.random.getBike = function(){
	return {
		"manufacturer": Api.manufacturer.getRandomItem(),
		"delivery": Api.delivery.getRandomItem(),
		"inStock": Api.inStock.getRandomItem(),
		"price": Api.price.getRandomPrice(),
		"date": Api.date.getRandomYear(),
		"type": Api.type.getRandomItem(),
		"fullSuspension": Api.fullSuspension.getRandomItem(),
		"typeOfDrive": Api.typeOfDrive.getRandomItem(),
		"frameMaterial": Api.frameMaterial.getRandomItem(),
		"forkMaterial": Api.forkMaterial.getRandomItem(),
		"foldableFrame": Api.foldableFrame.getRandomItem(),
		"wheelDiameter": Api.wheelDiameter.getRandomItem(),
		"frontFork": Api.frontFork.getRandomItem(),
		"frontBrake": Api.frontBrake.getRandomItem(),
		"rearBrake": Api.rearBrake.getRandomItem(),
		"womensBike": Api.womensBike.getRandomItem(),
		"teenageBike": Api.teenageBike.getRandomItem(),
		"weight": Api.weight.getRandomItem(),
		"frameSize": Api.frameSize.getRandomItem(),
		"numberOfSpeeds": Api.numberOfSpeeds.getRandomItem(),
		"numberOfStarsInSystem": Api.numberOfStarsInSystem.getRandomItem(),
		"numberOfStarsInCassette": Api.numberOfStarsInCassette.getRandomItem(),
		"professionalBike": Api.professionalBike.getRandomItem(),
		"frameType": Api.frameType.getRandomItem(),
		"frameColor": Api.frameColor.getRandomItem(),
		"stroke": Api.stroke.getRandomItem(),
		"lockFork": Api.lockFork.getRandomItem(),
		"diameterOfStockForks": Api.diameterOfStockForks.getRandomItem(),
		"transmissionType": Api.transmissionType.getRandomItem(),
		"magnetType": Api.magnetType.getRandomItem(),
		"doubleRims": Api.doubleRims.getRandomItem(),
		"rimMaterial": Api.rimMaterial.getRandomItem(),
		"tubelessTtires": Api.tubelessTtires.getRandomItem(),
		"tireTreadPattern": Api.tireTreadPattern.getRandomItem(),
		"tireWidth": Api.tireWidth.getRandomItem(),
		"steeringWheel": Api.steeringWheel.getRandomItem(),
		"grips": Api.grips.getRandomItem(),
		"horns": Api.horns.getRandomItem(),
		"saddle": Api.saddle.getRandomItem(),
		"seatpostLength": Api.seatpostLength.getRandomItem(),
		"saddleDepreciation": Api.saddleDepreciation.getRandomItem(),
		"pedals": Api.pedals.getRandomItem(),
		"pedalMaterial": Api.pedalMaterial.getRandomItem(),
		"chainProtection": Api.chainProtection.getRandomItem(),
		"frontFlap": Api.frontFlap.getRandomItem(),
		"rearFlap": Api.rearFlap.getRandomItem(),
		"trunk": Api.trunk.getRandomItem(),
		"rearviewMirror": Api.rearviewMirror.getRandomItem(),
		"bellOrHorn": Api.bellOrHorn.getRandomItem(),
		"basket": Api.basket.getRandomItem(),
		"footboard": Api.footboard.getRandomItem(),
		"lamp": Api.lamp.getRandomItem(),
		"pump": Api.pump.getRandomItem(),
	}
}

Api.random.getBikeStringify = function(){
	return JSON.stringify( Api.getRandomBike() );
}

Api.random.getId = function(){
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZ".split("");
	var str = "";
	for(var i=0; i<30; i++) {
		str += chars[ getRandomValue(0, chars.length-1) ];
	}
	return str;
}

Api.random.getListBike = function(length){
	var obj = {};
	for(var i=0; i<length; i++){
		obj[ Api.random.getId() ] = Api.random.getBike();
	}
	return obj;
}

Api.random.getListBikeStringify = function(length){
	return JSON.stringify( Api.random.getListBike(length) );
}

// console.log(Api);
export { Api };