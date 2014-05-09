/**
 * Update db method
 */
var util    = require('util');
var table   = require('./proto/table');
var limit   = require('./proto/limit');
var where   = require('./proto/where');


/**
 * db.Delete() - initiator
 */
function Init(_table) {
    return new Delete(_table, this._connection);
}


/**
 * Delete constructor
 */
function Delete(_table, connection) {
    this._connection = connection;

    //defaults
    this._table    = _table || '';
    this._where   = '';
    this._whereArgs = [];
    this._limit   = '';

    return this;
}


/**
 * Prototypes
 */
Delete.prototype.table = table;
Delete.prototype.where = where;
Delete.prototype.limit = limit;


/**
 * Run
 */
Delete.prototype.run = function Run(cb) {
    var query = util.format('DELETE FROM %s %s %s', this._table, this._where, this._limit);

    this._connection.queryPost(query, this._whereArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
