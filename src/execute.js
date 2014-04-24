/**
 * Constructor
 */
var Execute = function Construct(query, connection) {
	this.query = query;
	this.connection = connection;

	return this;
}


/**
* Execute the query
*/
Execute.prototype.execute = function Execute(statements, callback) {
	this.connection.send(this.query, statements, callback); 
}


/**
* Exports
*/
module.exports = Execute;
