/**
 * Constructor
 */
var Execute = function Construct(query, connection) {
	this.query = query; //expose the queryString of this object
	this.connection = connection; //under which connection will this query execute

	return this;
}


/**
* Execute the query
*/
Execute.prototype.execute = function Execute(statements, callback) {
	if(typeof statements === 'function') { //statements was sent as the callback
		callback = statements;
		statements = [];
	}

	this.connection.send(this.query, statements || [], callback); 
}


/**
* Exports
*/
module.exports = Execute;
