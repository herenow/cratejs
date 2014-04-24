/**
 * Libs
 */
var Connect = require('./connect');
var Query   = require('./query');


/**
 * Controller
 */
var Control = function Contructor(conf) {
	if(typeof conf === 'undefined') {
		conf = {};
	}

	this.connection = new Connect(conf);
	
	return this;
};


/**
 * Methods
 */
Control.prototype.Query   = Query;


/**
 * Exports
 */
module.exports = Control; 
