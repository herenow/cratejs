/**
 * Libs
 */
var Connect = require('./connect');
var Query   = require('./query');
var Execute = require('./execute');


/**
 * Controller
 */
var Control = function Contructor(conf) {
	var connection = Connect({
		host: conf.host,
		port: conf.port,
		user: conf.user,
		pass: conf.pass
	});
};


/**
 * Methods
 */
Control.query   = Query;
Control.execute = Execute;


/**
 * Exports
 */
module.exports = Control; 
