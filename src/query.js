/**
 * Libs
 */
var Execute = require('./execute');


/**
 * db.Query() initiator
 */
function Init(str) {
    return new Query(str, this._connection);
}


/**
 * db.Query - Constructor
 */
function Query(str, connection) {
    this._queryString = str;
    this._connection  = connection;

    return this;
}


/**
 * Prototypes
 */
Query.prototype.execute = Execute; //db.Query().execute()


/**
 * Exports
 */
module.exports = Init;
