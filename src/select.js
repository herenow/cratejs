/**
 * Search db method
 */
var util    = require('util');
var columns = require('./proto/columns');
var where   = require('./proto/where');
var table   = require('./proto/table');
var order   = require('./proto/order');
var limit   = require('./proto/limit');


/**
 * db.Find() - initiator
 */
function Init(_table) {
    return new Select({table: _table}, this._connection);
}


/**
 * Find constructor
 */
function Select(options, connection) {
    options = options || {};
    this._connection = connection;

    //Select query properties
    //Defaults:
    this._prop = {
        table: options.table || '',
        columns: options.columns || '*',
        where: options.where || '',
        whereArgs: options.whereArgs || [],
        limit: options.limit || '',
        order: options.order || ''
    }

    return this;
}


/**
 * Prototypes
 */
Select.prototype.columns = columns;
Select.prototype.table = table;
Select.prototype.where = where;
Select.prototype.order = order;
Select.prototype.limit = limit;


/**
 * Run
 */
Select.prototype.run = function Run(cb) {
    var query = util.format('SELECT %s FROM %s %s %s %s', this._prop.columns, this._prop.table, this._prop.where, this._prop.order, this._prop.limit);

    this._connection.queryPost(query, this._prop.whereArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
