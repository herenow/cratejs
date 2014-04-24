/**
 * Libs
 */
var Execute = require('./execute');


/**
 * db.query()
 */
var Query = function Query(str) {
	//Create a new execute for this query
	var execute = new Execute(str, this.connection); //this.connection was inherited from the Controller (main.js)
							 //Control.prototype.Query

	return execute;
}


/**
 * Exports
 */
module.exports = Query;
