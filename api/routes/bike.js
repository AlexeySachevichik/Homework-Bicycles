const ObjectID = require('mongodb').ObjectID;
const Check = require('../check');

module.exports = function(app, db){

	app.get('/bike/get/:id', (request, response) => {
		if( Check.id(request.params.id) ){
			db.collection('bike').findOne({ _id: ObjectID(request.params.id) }, function(error, document){
				if (error){
					console.log(`STATUS: 500   Nothing found! There is no entry in the database with an identifier "${request.params.id}"`);
					console.log(error);
					return response.sendStatus(500);
				}
				console.log(`STATUS: 200   Record with id "${request.params.id}" found!`);
				return response.send(document);
			});
		} else {
			console.log(`STATUS: 500   Incorrect value! In the url(http://${request.headers.host + request.url}), value "${request.params.id}" must be a database identifier.`);
			return response.sendStatus(500);
		};
	});

	app.post('/bike/add', (request, response) => {

		// сделать проверку переданных значений
		
		var bike = {
			"manufacturer": request.body.manufacturer || "",
			"delivery": request.body.delivery || false,
			"inStock": request.body.inStock || false,
			"price": request.body.price || "0.00",
			"year": request.body.year || 0,
			"class": request.body.class || "",
			"fullSuspension": request.body.fullSuspension || "",
			"typeOfDrive": request.body.typeOfDrive || "",
			"frameMaterial": request.body.frameMaterial || "",
			"forkMaterial": request.body.forkMaterial || "",
			"foldableFrame": request.body.foldableFrame || false,
			"wheelDiameter": request.body.wheelDiameter || 0,
			"frontFork": request.body.frontFork || "",
			"frontBrake": request.body.frontBrake || "",
			"rearBrake": request.body.rearBrake || "",
			"womensBike": request.body.womensBike || "",
			"teenageBike": request.body.teenageBike || "",
			"weight": request.body.weight || 0,
			"frameSize": request.body.frameSize || 0,
			"numberOfSpeeds": request.body.numberOfSpeeds || "",
			"numberOfStarsInSystem": request.body.numberOfStarsInSystem || 0,
			"numberOfStarsInCassette": request.body.numberOfStarsInCassette || "",
			"professionalBike": request.body.professionalBike || "",
			"frameType": request.body.frameType || "",
			"frameColor": request.body.frameColor || "",
			"stroke": request.body.stroke || "",
			"lockFork": request.body.lockFork || false,
			"diameterOfStockForks": request.body.diameterOfStockForks || "",
			"transmissionType": request.body.transmissionType || "",
			"magnetType": request.body.magnetType || "",
			"doubleRims": request.body.doubleRims || false,
			"rimMaterial": request.body.rimMaterial || "",
			"tubelessTtires": request.body.tubelessTtires || false,
			"tireTreadPattern": request.body.tireTreadPattern || "",
			"tireWidth": request.body.tireWidth || 0,
			"steeringWheel": request.body.steeringWheel || "",
			"grips": request.body.grips || "",
			"horns": request.body.horns || "",
			"saddle": request.body.saddle || "",
			"seatpostLength": request.body.seatpostLength || 0,
			"saddleDepreciation": request.body.saddleDepreciation || "",
			"pedals": request.body.pedals || "",
			"pedalMaterial": request.body.pedalMaterial || "",
			"chainProtection": request.body.chainProtection || "",
			"frontFlap": request.body.frontFlap || false,
			"rearFlap": request.body.rearFlap || false,
			"trunk": request.body.trunk || false,
			"rearviewMirror": request.body.rearviewMirror || false,
			"bellOrHorn": request.body.bellOrHorn || false,
			"basket": request.body.basket || false,
			"footboard": request.body.footboard || false,
			"lamp": request.body.lamp || false,
			"pump": request.body.pump || false,
			"description": request.body.description || "",
			"model": request.body.model || "",
			"image": request.body.image || "",
			"views": request.body.views || 0,
			"rating": request.body.rating || [0,0,0,0,0]
			};

		db.collection('bike').insertOne(bike, function(error, result){
			if (error){
				console.log("STATUS: 500   Record not added!");
				console.log(error);
				return response.sendStatus(500);
			}
			console.log("STATUS: 200   Record added successfully!");
			return response.sendStatus(200);
		});
	});

	app.post('/bike/add/list', (request, response) => {

		// сделать проверку переданных значений

		let data = request.body.data;
		db.collection('bike').insertMany(data, function(error, result){
			if (error){
				console.log("STATUS: 500   No records added!");
				console.log(error);
				return response.sendStatus(500);
			}
			console.log("STATUS: 200   ${data.length} records successfully added to database!");
			return response.sendStatus(200);
		});
	});
};