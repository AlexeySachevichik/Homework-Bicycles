const Random = require("../random");
const Check = require('../check');

module.exports = function(app, db){

	app.post("/bike/add/random", (request, response) => {
		db.collection('bike').insertOne(Random.getBike(), function(error, result){
			if (error){
				console.log("STATUS: 500   Record not added!");
				console.log(error);
				return response.sendStatus(500);
			}
			console.log("STATUS: 200   Record added successfully!");
			return response.sendStatus(200);
		});
	});

	app.post('/bike/add/list/random/:count', (request, response) => {
		if( Check.randomCount(request.params.count) ){
			db.collection('bike').insertMany( Random.getListBike( Number(request.params.count) ), function(error, result){
				if (error){
					console.log("STATUS: 500   No records added!");
					console.log(error);
					return response.sendStatus(500);
				}
				console.log(`STATUS: 200   ${request.params.count} records successfully added to database!`);
				return response.sendStatus(200);
			});
		}
		else {
			console.log(`STATUS: 500   Incorrect value! In the url(http://${request.headers.host + request.url}), value "${request.params.count}" must belong to the range [1, 5000]`);
			return response.sendStatus(500);
		};	
	});
};