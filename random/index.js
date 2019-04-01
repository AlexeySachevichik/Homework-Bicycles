const Random = {

	// ФУНКЦИИ
	func: {},
	
	// ОБЩАЯ ИНФОРМАЦИЯ
	info: {
		manufacturer: require("./property/info/manufacturer"),	// Производитель
		model: require("./property/info/model"),	// Модель (Производитель запчастей)
		year: require("./property/info/year"),	// Дата выхода на рынок
		class: require("./property/info/class"),	// Класс
		womensBike: require("./property/info/womensBike"),	// Женский велосипед
		teenageBike: require("./property/info/teenageBike"),	// Подростковый велосипед
		weight: require("./property/info/weight"),	// Вес
		words: require("./property/words"),	// Набор слов для описания
		delivery: require("./property/info/delivery"),	// Доставка
		inStock: require("./property/info/inStock"),	// В наличии
		price: require("./property/price"),	// Цена
		image: require("./property/image")	// Картинка
	},

	// РАМА
	frame: {
		material: require("./property/frame/material"),	// Материал рамы
		type: require("./property/frame/type"),	// Тип рамы
		size: require("./property/frame/size"),	// Размер рамы
		foldable: require("./property/frame/foldable"),	// Складная рама
		rearShock: require("./property/frame/rearShock"),	// Задний амортизатор
		color: require("./property/frame/color")	// Цвет рамы
	},

	// ВИЛКА
	fork: {
		name: require("./property/fork/name"),	// Вилка
		type: require("./property/fork/type"),	// Тип вилки
		material: require("./property/fork/material"),	// Тип амортизации
		depreciationType: require("./property/fork/depreciationType"),	// Материал вилки
		stroke: require("./property/fork/stroke"),	// Ход амортизатора
		diameterStock: require("./property/fork/diameterStock"),	// Диаметр штока вилки
		lock: require("./property/fork/lock")	// Блокировка вилки
	},	

	// ТРАНСМИССИЯ
	transmission: {
		typeOfDrive: require("./property/transmission/typeOfDrive"),	// Тип привода
		type: require("./property/transmission/type"),	// Тип трансмиссии
		numberOfSpeeds: require("./property/transmission/numberOfSpeeds"),	// Количество скоростей
		carriage: require("./property/transmission/carriage"),	// Каретка
		connectingRodSystem: require("./property/transmission/connectingRodSystem"),	// Система шатунов
		numberOfStarsInSystem: require("./property/transmission/numberOfStarsInSystem"),	// Количество звезд в системе
		numberTeethStarsInSystem: require("./property/transmission/numberTeethStarsInSystem"),	// Количество зубьев в звездах системы
		cassetteOrRatchet: require("./property/transmission/cassetteOrRatchet"),	// Кассета или трещотка
		numberOfStarsInCassette: require("./property/transmission/numberOfStarsInCassette"),	// Количество звезд в кассете
		numberTeethStarsInCassette: require("./property/transmission/numberTeethStarsInCassette"),	// Количество зубьев в звездах кассеты
		frontDerailleur: require("./property/transmission/frontDerailleur"),	// Передний переключатель
		rearDerailleur: require("./property/transmission/rearDerailleur"),	// Задний переключатель
		chain: require("./property/transmission/chain")	// Цепь
	},

	// МАНЕТКИ (ШИФТЕРЫ)
	shifters: {
		name: require("./property/shifters/name"),	// Манетки
		type: require("./property/shifters/type")	// Тип манеток
	},
	
	// ТОРМОЗА
	brake: {
		frontBrake: require("./property/brake/frontBrake"),	// Передний тормоз
		typeFrontBrake: require("./property/brake/typeFrontBrake"),	// Тип переднего тормоза
		rearBrake: require("./property/brake/rearBrake"),	// Задний тормоз
		typeRearBrake: require("./property/brake/typeRearBrake"),	// Тип заднего тормоза
		diameterDiscs: require("./property/brake/diameterDiscs")	// Диаметр тормозных дисков
	},

	// КОЛЁСА
	wheels: {
		diameter: require("./property/wheels/diameter"),	// Диаметр колёс
		frontHub: require("./property/wheels/frontHub"),	// Передняя втулка
		rearHub: require("./property/wheels/rearHub"),	// Задняя втулка
		rim: require("./property/wheels/rim"),	// Обода
		doubleRims: require("./property/wheels/doubleRims"),	// Двойные обода
		rimMaterial: require("./property/wheels/rimMaterial"),	// Материал ободьев
		tire: require("./property/wheels/tire"),	// Покрышки
		tubeless: require("./property/wheels/tubeless"),	// Бескамерные покрышки
		sideRing: require("./property/wheels/sideRing"),	// Бортовое кольцо
		pattern: require("./property/wheels/pattern"),	// Рисунок протектора
		width: require("./property/wheels/width")	// Ширина шины
	},

	// РУЛЬ
	rudder: {
		name: require("./property/rudder/name"),	// Руль
		type: require("./property/rudder/type"),	// Тип руля
		material: require("./property/rudder/material"),	// Материал руля
		steeringWheel: require("./property/rudder/steeringWheel"),	// Подъём руля
		grips: require("./property/rudder/grips"),	// Грипсы
		gripType: require("./property/rudder/gripType"),	// Модель грипс
		horns: require("./property/rudder/horns"),	// «Рога»
		wheelWidth: require("./property/rudder/wheelWidth")	// Ширина руля
	},

	// СЕДЛО
	saddle: {
		name: require("./property/saddle/name"),	// Седло
		type: require("./property/saddle/type"),	// Тип седла
		length: require("./property/saddle/length"),	// Длина подседельного штыря
		depreciation: require("./property/saddle/depreciation")	// Амортизация седла
	},

	// ПЕДАЛИ
	pedals: {
		name: require("./property/pedals/name"),	// Педали
		type: require("./property/pedals/type"),	// Тип педалей
		material: require("./property/pedals/material")	// Материал педалей
	},

	// КОМПЛЕКТАЦИЯ
	equipment: {
		frontFlap: require("./property/equipment/frontFlap"),	// Передний щиток
		rearFlap: require("./property/equipment/rearFlap"),	// Задний щиток
		chainProtection: require("./property/equipment/chainProtection"),	// Защита цепи
		trunk: require("./property/equipment/trunk"),	// Багажник
		rearviewMirror: require("./property/equipment/rearviewMirror"),	// Зеркало заднего вида
		bellOrHorn: require("./property/equipment/bellOrHorn"),	// Звонок или клаксон
		basket: require("./property/equipment/basket"),	// Корзина
		footboard: require("./property/equipment/footboard"),	// Подножка
		lamp: require("./property/equipment/lamp"),	// Фонарь
		pump: require("./property/equipment/pump"),	// Насос
		pegy: require("./property/equipment/pegy")	// Пеги
	},

	// АККУМУЛЯТОР
	battery: {
		type: require("./property/battery/type"),	// Тип
		voltage: require("./property/battery/voltage"),	// Напряжение
		capacity: require("./property/battery/capacity"),	// Ёмкость
		chargingTime: require("./property/battery/chargingTime"),	// Время зарядки
		mileage: require("./property/battery/mileage")	// Пробег на одной зарядке
	},

	// ДВИГАТЕЛЬ
	engine: {
		power: require("./property/engine/power"),	// Мощность электрического двигателя
		maxSpeed: require("./property/engine/maxSpeed"),	// Максимальная скорость на моторе
		controller: require("./property/engine/controller")	// Контроллер
	}
};





const getValue = function(min, max){ // получим рандомное значение из диапозона
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getItem = function(){ // получим рандомный пункт
	return this.items[getValue(0, this.items.length - 1)];
}

const getRange = function(){ // получим значение из диапозона
	return getValue(this.min, this.max); 
}

const getRangeNull = function(){ // получим значение из диапозона (возможно пустое значение)
	let value = getValue(0,5);
	if( value === 0 ) return "";
	else return getValue(this.min, this.max);
}

const getRangeArray = function(){ // получим значение из двух диапозонов (возможно пустое значение)
	let value = getValue(0,5);
	if( value === 0 ) return "";
	if( value === 1 || value === 2 ) return [getValue(this.min1, this.max2)];
	else return [getValue(this.min1, this.max1), getValue(this.min2, this.max2)];
}

const getPrice = function(){ // получим цену из диапозона
	return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}

const getWheelDiameter = function(){ // получим размер колес из диапозона
	return +(getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0));
}

const getStroke = function(){ // получим диаметр штока вилки
	return +(getValue(this.min, this.max) * 10);
}

const getWeight = function(){ // получим вес из диапозона
	if( getValue(0,5) === 0 ) return "";
	else return +((getValue(this.min, this.max) + (getValue(0, 99) / 100 )).toFixed(2));
}

const getFrameSize = function(){ // получим размер рамы из диапозона
	if( getValue(0,5) === 0 ) return "";
	else return +(getValue(this.min, this.max) + (getValue(0, 1) ? 0.5 : 0));
}

const getFrameColor = function(){ // получим размер рамы из диапозона
	if( getValue(0,5) === 0 ) return "";
	else {
		if( getValue(0,5) === 0){
			return this.items[getValue(0, this.items.length - 1)] + ", " + this.items[getValue(0, this.items.length - 1)];
		} else return this.items[getValue(0, this.items.length - 1)];
	}
}

const getTireWidth = function(){ // получим ширину покрышки из диапозона
	if( getValue(0,5) === 0 ) return "";
	else return +((getValue(this.min, this.max) + (getValue(0, 9) / 10 )).toFixed(1));
}

const getCapacity = function(){ // получим ёмкость из диапозона
	if( getValue(0,3) === 0 ) return "";
	else return +((getValue(this.min, this.max) + (getValue(0, 9) / 10 )).toFixed(1));
}



/*
 * УСТАНАВЛИВАЕМ ССЫЛКИ НА ФУНКЦИИ
 */ 
// ОБЩАЯ ИНФОРМАЦИЯ
Random.info.manufacturer.getItem = getItem;	// Производитель
Random.info.year.getItem = getRange;	// Дата выхода на рынок
Random.info.class.getItem = getItem;	// Класс
Random.info.weight.getItem = getWeight;	// Вес
Random.info.price.getItem = getPrice;	// Цена
Random.info.image.getItem = getItem;	// Картинка

// РАМА
Random.frame.material.getItem = getItem;	// Материал рамы
Random.frame.type.getItem = getItem;	// Тип рамы
Random.frame.size.getItem = getFrameSize;	// Размер рамы
Random.frame.color.getItem = getFrameColor;	// Цвет рамы

// ВИЛКА
Random.fork.type.getItem = getItem;	// Тип вилки
Random.fork.material.getItem = getItem;	// Материал вилки
Random.fork.depreciationType.getItem = getItem;	// Материал вилки
Random.fork.stroke.getItem = getStroke;	// Ход амортизатора
Random.fork.diameterStock.getItem = getItem;	// Диаметр штока вилки

// ТРАНСМИССИЯ
Random.transmission.typeOfDrive.getItem = getItem;	// Тип привода
Random.transmission.type.getItem = getItem;	// Тип трансмиссии
Random.transmission.numberOfSpeeds.getItem = getRangeNull;	// Количество скоростей
Random.transmission.numberOfStarsInSystem.getItem = getRangeNull;	// Количество звезд в системе
Random.transmission.numberTeethStarsInSystem.getItem = getRangeArray;	// Количество зубьев в звездах системы
Random.transmission.numberOfStarsInCassette.getItem = getRangeNull;	// Количество звезд в кассете
Random.transmission.numberTeethStarsInCassette.getItem = getRangeArray;	// Количество зубьев в звездах кассеты

// МАНЕТКИ (ШИФТЕРЫ)
Random.shifters.type.getItem = getItem;	// Тип манеток

// ТОРМОЗА
Random.brake.typeFrontBrake.getItem = getItem;	// Тип переднего тормоза
Random.brake.typeRearBrake.getItem = getItem;	// Тип заднего тормоза
Random.brake.diameterDiscs.getItem = getRangeNull;	// Диаметр тормозных дисков

// КОЛЁСА
Random.wheels.diameter.getItem = getWheelDiameter;	// Диаметр колёс
Random.wheels.rimMaterial.getItem = getItem;	// Материал ободьев
Random.wheels.sideRing.getItem = getItem;	// Материал ободьев
Random.wheels.pattern.getItem = getItem;	// Рисунок протектора
Random.wheels.width.getItem = getTireWidth;	// Ширина шины

// РУЛЬ
Random.rudder.type.getItem = getItem;	// Тип руля
Random.rudder.material.getItem = getItem;	// Материал руля
Random.rudder.steeringWheel.getItem = getRangeNull;	// Подъём руля
Random.rudder.grips.getItem = getItem;	// Грипсы
Random.rudder.wheelWidth.getItem = getRangeNull;	// Ширина руля

// СЕДЛО
Random.saddle.type.getItem = getItem;	// Тип седла
Random.saddle.length.getItem = getRangeNull;	// Длина подседельного штыря
Random.saddle.depreciation.getItem = getItem;	// Амортизация седла


// ПЕДАЛИ
Random.pedals.type.getItem = getItem;	// Тип педалей
Random.pedals.material.getItem = getItem;	// Материал педалей

// КОМПЛЕКТАЦИЯ
Random.equipment.chainProtection.getItem = getItem;	// Защита цепи

// АККУМУЛЯТОР
Random.battery.type.getItem = getItem;	// Тип
Random.battery.voltage.getItem = getItem;	// Напряжение
Random.battery.capacity.getItem = getCapacity;	// Ёмкость
Random.battery.chargingTime.getItem = getRangeNull;	// Время зарядки
Random.battery.mileage.getItem = getRangeNull;	// Пробег на одной зарядке

// ДВИГАТЕЛЬ
Random.engine.power.getItem = getRangeNull;	// Мощность электрического двигателя
Random.engine.maxSpeed.getItem = getRangeNull;	// Максимальная скорость на моторе





/*
 * РАНДОМЫНЕ ФУНКЦИИ
 */
Random.func.getId = function(){ // получим рандомный ID
	var chars = "0123456789ABCDEFGHIJKLMNPRSTUVWXTZ".split("");
	var str = "";
	for(var i=0; i<12; i++) {
		str += chars[ getValue(0, chars.length-1) ];
	}
	return str;
}

Random.func.getModel = function(){ // получим рандомное название модели
	var str = "";
	var chars = "ABCDEFGHIJKLMNPQRSTUVWXTZ".split("");

	if(getValue(0, 1)){

		var word = Random.info.model.words[ getValue(0, Random.info.model.words.length-1) ].toLowerCase();
		str += word[0].toUpperCase() + word.slice(1) + " ";

		if( getValue(0, 1) ){
			word = Random.info.model.addit[ getValue(0, Random.info.model.addit.length-1) ].toLowerCase();
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

Random.func.getModelPart = function(){ // получим рандомное название модели запчасти
	let str = "";
	let chars = "ABCDEFGHIJKLMNPQRSTUVWXTZ".split("");
	let value = getValue(0, 4)

	if( value === 4 ){
		return "";
	} else {
		let word = Random.info.model.spareparts[ getValue(0, Random.info.model.spareparts.length-1) ].toLowerCase();
		str += word[0].toUpperCase() + word.slice(1) + " ";

		if( getValue(0, 3) === 0){
			word = Random.info.model.suffix[ getValue(0, Random.info.model.suffix.length-1) ].toLowerCase();
			str += word[0].toUpperCase() + word.slice(1) + " ";
		}

		if( getValue(0, 3) === 0){
			word = Random.info.model.suffix[ getValue(0, Random.info.model.suffix.length-1) ].toLowerCase();
			str += word[0].toUpperCase() + word.slice(1) + " ";
		}

		str += "(";
		for( i=1; i<3; i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}

		if( getValue(0, 1) ){
			str += "-";
		}

		for( i=1; i<getValue(2,3); i++ ){
			str += getValue(0, 9);
		}
		for( i=0; i<getValue(0, 3); i++ ){
			str += chars[ getValue(0, chars.length-1) ];
		}
		str += ")";

	}
	return str;
}

Random.func.getFirmName = function(){ // получим рандомное название фирмы
	let str = "";
	let value = getValue(0, 4)

	if( value === 4 ){
		return "";
	} else {
		let word = Random.info.model.spareparts[ getValue(0, Random.info.model.spareparts.length-1) ].toLowerCase();
		return word[0].toUpperCase() + word.slice(1);
	}	
}

Random.func.getBoolean = function(){ // получим true/false и пустое значение
	const value = getValue(0, 4);
	if(value === 0) return true;
	else if(value === 1) return false;
	else return "";
}


Random.func.getText = function(){ // получим рандомное описание
	var length = getValue(50, 70);
	var str = "";
	for(var i=0; i<length; i++){
		str += (Random.info.words[ getValue(0, Random.info.words.length-1) ] + " ").toLowerCase();
	}
	return str[0].toUpperCase() + str.slice(1, -1) + ".";
}

Random.func.getBike = function(){
	return {

		// ОБЩАЯ ИНФОРМАЦИЯ
		info: {
			// id: Random.getId(),	// получим автоматически при добавлении в mongodb
			manufacturer: Random.info.manufacturer.getItem(),
			model: Random.func.getModel(),
			year: Random.info.year.getItem(),
			class: Random.info.class.getItem(),
			womensBike: Random.func.getBoolean(),
			teenageBike: Random.func.getBoolean(),
			weight: Random.info.weight.getItem(),
			description: Random.func.getText(),
			views: getValue(0, 200),
			delivery: Random.func.getBoolean(),
			inStock: Random.func.getBoolean(),
			price: Random.info.price.getItem(),
			rating: [getValue(0, 15), getValue(0, 15), getValue(0, 15), getValue(0, 15), getValue(0, 15)],
			image: Random.info.image.getItem()
		},

		// РАМА
		frame: {
			material: Random.frame.material.getItem(),
			type: Random.frame.type.getItem(),
			size: Random.frame.size.getItem(),
			foldable: Random.func.getBoolean(),
			rearShock: Random.func.getBoolean(),
			color: Random.frame.color.getItem()
		},
		
		// ВИЛКА
		fork: {
			name: Random.func.getModelPart(),
			type: Random.fork.type.getItem(),
			material: Random.fork.material.getItem(),
			depreciationType: Random.fork.depreciationType.getItem(),
			stroke: Random.fork.stroke.getItem(),
			diameterStock: Random.fork.diameterStock.getItem(),
			lock: Random.func.getBoolean()
		},
		
		// ТРАНСМИССИЯ
		transmission: {
			typeOfDrive: Random.transmission.typeOfDrive.getItem(),
			type: Random.transmission.type.getItem(),
			numberOfSpeeds: Random.transmission.numberOfSpeeds.getItem(),
			carriage: Random.func.getModelPart(),
			connectingRodSystem: Random.func.getModelPart(),
			numberOfStarsInSystem: Random.transmission.numberOfStarsInSystem.getItem(),
			numberTeethStarsInSystem: Random.transmission.numberTeethStarsInSystem.getItem(),
			cassetteOrRatchet: Random.func.getModelPart(),
			numberOfStarsInCassette: Random.transmission.numberOfStarsInCassette.getItem(),
			numberTeethStarsInCassette: Random.transmission.numberTeethStarsInCassette.getItem(),
			frontDerailleur: Random.func.getModelPart(),
			rearDerailleur: Random.func.getModelPart(),
			chain: Random.func.getModelPart()
		},

		// МАНЕТКИ (ШИФТЕРЫ)
		shifters: {
			name: Random.func.getModelPart(),
			type: Random.shifters.type.getItem()
		},

		// ТОРМОЗА
		brake: {
			frontBrake: Random.func.getModelPart(),
			typeFrontBrake: Random.brake.typeFrontBrake.getItem(),
			rearBrake: Random.func.getModelPart(),
			typeRearBrake: Random.brake.typeRearBrake.getItem(),
			diameterDiscs: Random.brake.diameterDiscs.getItem()
		},

		// КОЛЁСА
		wheels: {
			diameter: Random.wheels.diameter.getItem(),
			frontHub: Random.func.getModelPart(),
			rearHub: Random.func.getModelPart(),
			rim: Random.func.getModelPart(),
			doubleRims: Random.func.getBoolean(),
			rimMaterial: Random.wheels.rimMaterial.getItem(),
			tire: Random.func.getFirmName(),
			tubeless: Random.func.getBoolean(),
			sideRing: Random.wheels.sideRing.getItem(),
			pattern: Random.wheels.pattern.getItem(),
			width: Random.wheels.width.getItem()
		},

		// РУЛЬ
		rudder: {
			name: Random.func.getModelPart(),
			type: Random.rudder.type.getItem(),
			material: Random.rudder.material.getItem(),
			steeringWheel: Random.rudder.steeringWheel.getItem(),
			grips: Random.rudder.grips.getItem(),
			gripType: Random.func.getModelPart(),
			horns: Random.func.getBoolean(),
			wheelWidth: Random.rudder.wheelWidth.getItem()
		},

		// СЕДЛО
		saddle: {
			name: Random.func.getModelPart(),
			type: Random.saddle.type.getItem(),
			length: Random.saddle.length.getItem(),
			depreciation: Random.saddle.depreciation.getItem()
		},

		// ПЕДАЛИ
		pedals: {
			name: Random.func.getModelPart(),
			type: Random.pedals.type.getItem(),
			material: Random.pedals.material.getItem()
		},

		// КОМПЛЕКТАЦИЯ
		equipment: {
			frontFlap: Random.func.getBoolean(),
			rearFlap: Random.func.getBoolean(),
			chainProtection: Random.equipment.chainProtection.getItem(),
			trunk: Random.func.getBoolean(),
			rearviewMirror: Random.func.getBoolean(),
			bellOrHorn: Random.func.getBoolean(),
			basket: Random.func.getBoolean(),
			footboard: Random.func.getBoolean(),
			lamp: Random.func.getBoolean(),
			pump: Random.func.getBoolean(),
			pegy: Random.func.getBoolean()
		},

		// АККУМУЛЯТОР
		battery: {
			type: Random.battery.type.getItem(),
			voltage: Random.battery.voltage.getItem(),
			capacity: Random.battery.capacity.getItem(),
			chargingTime: Random.battery.chargingTime.getItem(),
			mileage: Random.battery.mileage.getItem()
		},

		// ДВИГАТЕЛЬ
		engine: {
			power: Random.engine.power.getItem(),
			maxSpeed: Random.engine.maxSpeed.getItem(),
			controller: Random.func.getBoolean()
		}
	}
};

Random.func.getDescription = function(){
	return {
		manufacturer: {
			title: Random.manufacturer.title
		},
		model: {
			title: Random.model.title
		},
		year: {
			title: Random.year.title,
			unit: Random.year.unit,
			description: Random.year.description
		},
		class: {
			title: Random.class.title,
			description: Random.class.description
		},
		womensBike: {
			title: Random.womensBike.title,
			description: Random.womensBike.description
		},
		teenageBike: {
			title: Random.teenageBike.title,
			description: Random.teenageBike.description
		},
		frameMaterial: {
			title: Random.frameMaterial.title,
			description: Random.frameMaterial.description
		},
		frameType: {
			title: Random.frameType.title,
			description: Random.frameType.description
		},
		foldableFrame: {
			title: Random.foldableFrame.title,
			description: Random.foldableFrame.description
		},
		rearShockAbsorber: {
			title: Random.rearShockAbsorber.title,
			description: Random.rearShockAbsorber.description
		},
		frameColor: {
			title: Random.frameColor.title,
			description: Random.frameColor.description,
			hex: Random.frameColor.hex
		},
		forkType: {
			title: Random.forkType.title,
			description: Random.forkType.description
		},
		forkMaterial: {
			title: Random.forkMaterial.title
		}
	}
};

Random.func.getListBike = function(length){ // Получим рандомынй список байков
	var res = [];
	for(var i=0; i<length; i++){
		let bike = Random.func.getBike();
		if( bike.info.class !== "электровелосипед" ){
			bike.battery = undefined;
			bike.engine = undefined;
		}
		res.push(bike);
	}
	return res;
}

module.exports = Random;