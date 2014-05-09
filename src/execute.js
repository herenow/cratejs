/**
* Execute a constructed db.Query()
*/
function Execute(statements, callback) {
	if(typeof statements === 'function') { //statements was sent as the callback
		callback = statements;
		statements = [];
	}

	this._connection.send(this._queryString, statements || [], callback);
                        //this._queryString; Can be found on ./query.js constructor function
}


/**
* Exports
*/
module.exports = Execute;
