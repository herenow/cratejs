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
    return new Select(_table, this._connection);
}


/**
 * Find constructor
 */
function Select(_table, connection) {
    this._connection = connection;

    //defaults
    this._columns = '*';
    this._table   = _table || '';
    this._where   = '';
    this._whereArgs = [];
    this._limit   = '';
    this._order   = '';

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
    var query = util.format('SELECT %s FROM %s %s %s %s', this._columns, this._table, this._where, this._order, this._limit);

    this._connection.queryPost(query, this._whereArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
