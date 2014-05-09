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
    return new Delete({table: _table}, this._connection);
}


/**
 * Delete constructor
 */
function Delete(options, connection) {
    options = options || {};
    this._connection = connection;

    //defaults
    this._prop = {
        table: options.table || '',
        where: options.where || '',
        whereArgs: options.whereArgs || [],
    }

    return this;
}


/**
 * Prototypes
 */
Delete.prototype.table = table;
Delete.prototype.where = where;


/**
 * Run
 */
Delete.prototype.run = function Run(cb) {
    var query = util.format('DELETE FROM %s %s', this._prop.table, this._prop.where);

    this._connection.queryPost(query, this._prop.whereArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
