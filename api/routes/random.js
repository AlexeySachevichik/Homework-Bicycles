const Random = require("../../random");

module.exports = function(app, db){

	// app.get('/bike/:id', (request, response) => {
	// 	// console.log('RESPONSE: ' + request.method + ' : ' + 'http://' + request.headers.host + request.url );
	// 	// console.log(request);
	// 	// console.log(request.params);
	// 	var bike = data.find(function(item){
	// 		return item.id === request.params.id;
	// 	});
	// 	response.send(bike);
	// });

	app.post("/random/add", (request, response) => {
		var bike = Random.getBike();
		db.collection('bike').insertOne(bike, function(error, result){
			if (error){
				console.log("STATUS: 500   Record not added!");
				console.log(error);
				response.sendStatus(500);
			}
			console.log("STATUS: 200   Record added successfully!");
			response.sendStatus(200);
		});
	});

	// app.post('/bike/addalldata', (request, response) => {
	// 	db.collection('bike').insertMany(data, function(error, result){
	// 		if (error){
	// 			console.log(error);
	// 			response.sendStatus(500);
	// 		}
	// 		response.sendStatus(200);
	// 	});
	// });
};