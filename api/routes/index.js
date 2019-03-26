module.exports = function(app, db){

	app.get("/", (request, response) => {
		console.log(`Hello, Server! URL: ${request.url}`);
		response.send(`Hello, Server! URL: ${request.url}`);
	});

	// Список маршрутов
	require("./bike")(app, db);
	require("./random")(app, db);

};