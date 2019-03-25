const data = require('../data');

module.exports = function(app, db){

	app.get('/bike/:id', (request, response) => {
		// console.log('RESPONSE: ' + request.method + ' : ' + 'http://' + request.headers.host + request.url );
		// console.log(request);
		// console.log(request.params);
		var bike = data.find(function(item){
			return item.id === request.params.id;
		});
		response.send(bike);
	});

	app.post('/bike', (request, response) => {
		var bike = data[0];
		// console.log(bike);
		db.collection('bike').insertOne(bike, function(error, result){
			if (error){
				console.log(error);
				response.sendStatus(500);
			}
			response.send(bike);
		});
	});

	app.post('/bike/addalldata', (request, response) => {
		db.collection('bike').insertMany(data, function(error, result){
			if (error){
				console.log(error);
				response.sendStatus(500);
			}
			response.sendStatus(200);
		});
	});
};