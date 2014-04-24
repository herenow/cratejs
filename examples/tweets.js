var db = require('./db.js');

var query = db.Query('SELECT text FROM tweets LIMIT ?');

query.execute([10], function(response) {
	console.log(response);
});
