var Crate = require('../index.js');

var db = new Crate({
	host: 'localhost',
	port: 4200
});

module.exports = db;
