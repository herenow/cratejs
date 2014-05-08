/**
 * Execute like function
 */
var Execute = {}


/**
* Execute a constructed db.Query()
*/
Execute.query = function Execute(statements, callback) {
	if(typeof statements === 'function') { //statements was sent as the callback
		callback = statements;
		statements = [];
	}

	this._connection.send(this._queryString, statements || [], callback);
                        //this._queryString; Can be found on ./query.js constructor function
}


/**
 * Direct execution of a query
 */
Execute.direct = function Direct(query, statements, callback) {
    if(typeof statements === 'function') { //statements was sent as the callback
        callback = statements;
        statements = [];
    }

    this._connection.send(query, statements || [], callback);
}


/**
* Exports
*/
module.exports = Execute;
