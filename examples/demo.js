var Crate = require('../index.js');

var db = new Crate();

var query = db.Query('SELECT text FROM tweets LIMIT ?');

query.execute([10], function(response) {
	console.log(response);
});
