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
	if(typeof conf === 'undefined') {
		conf = {};
	}

	this._connection = new Connect(conf);

	return this;
};


/**
 * Methods
 */
Control.prototype.Query   = Query;
Control.prototype.execute = Execute.direct; //Direct execution of a query


/**
 * Exports
 */
module.exports = Control;
