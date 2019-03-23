import * as manufacturer from "./Property/manufacturer"
import * as date from "./Property/date"
import * as type from "./Property/type"
import * as fullSuspension from "./Property/fullSuspension"

const Api = {
	"manufacturer": manufacturer,
	"date": date,
	"type": type,
	"fullSuspension": fullSuspension,
};

// получим рандомное значение из диапозона
function getRandomValue(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// получим рандомный пункт
function getRandomItem(items){
	return items[getRandomValue(0, items.length - 1)];
}

// получим описание пункта
function getItemDescription(item){
	return (this.description !== undefined &&
		    this.description[item] !== '' &&
		    this.description[item] !== undefined )
	? this.description[item] : '';
}

// получим полное описание из объекта в виде массива
function getFullDescription(){
	var arr = [];
	var count = 0;
	arr.push(this.title);

	if(this.description.text !== undefined && this.description.text !== '' ){
		arr.push(this.description.text);
	}

	for(var key in this.description){
		if( key !== 'text' && this.description[key] !== '' ){
			arr.push(`${++count}. ${key[0].toUpperCase() + key.slice(1)} - ${this.description[key]}`);
		}
	}
	return arr;
}

// получим описание в виде массива
function getDescription(){
	var arr = [];
	arr.push(this.title);

	if(this.description !== undefined && this.description !== '' ){
		arr.push(this.description);
	}
	return arr;
}


Api.manufacturer.getRandomItem = getRandomItem(Api.manufacturer.items);

Api.date.getRandomYear = getRandomValue(Api.date.min, Api.date.max);
Api.date.getRandomMonth = getRandomItem(Api.date.months);
Api.date.getRandomDay = getRandomItem(Api.date.day);
Api.date.getDescription = getDescription;

Api.type.getRandomItem = getRandomItem(Api.type.items);
Api.type.getFullDescription = getFullDescription;
Api.type.getItemDescription = getItemDescription;

Api.fullSuspension.getRandomItem = getRandomItem(Api.fullSuspension.items);
Api.fullSuspension.getDescription = getDescription;



console.log('==== API ====');
console.log(Api);
console.log('=============');
export { Api };