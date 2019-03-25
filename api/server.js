const config         = require('./config');
const expressClass   = require('express');
const bodyParser     = require('body-parser');
const mongo          = require('mongodb').MongoClient;
const client         = new mongo(config.uri, { useNewUrlParser: true });
// const client         = new mongo(config.localuri, { useNewUrlParser: true });
const app            = expressClass();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

client.connect( function(error, database){
	if(error) return console.log(error);
	
	const db = database.db('database_bike');
	// const db = database.db('database_bike');

	app.listen(config.localport, (error) => {
		if(error) return console.log(error);
		require('./routes')(app, db);
		console.log(`Start listen in: http://localhost:${config.localport}`);
	});
});