/**
 * Update db method
 */
var util    = require('util');
var table   = require('./proto/table');
var set     = require('./proto/set');
var limit   = require('./proto/limit');
var where   = require('./proto/where');


/**
 * db.Update() - initiator
 */
function Init(_table) {
    return new Update(_table, this._connection);
}


/**
 * Update constructor
 */
function Update(_table, connection) {
    this._connection = connection;

    //defaults
    this._table    = _table || '';
    this._set      = '';
    this._setArgs  = [];
    this._where   = '';
    this._whereArgs = [];
    this._limit   = '';

    return this;
}


/**
 * Prototypes
 */
Update.prototype.set   = set;
Update.prototype.table = table;
Update.prototype.where = where;
Update.prototype.limit = limit;


/**
 * Run
 */
Update.prototype.run = function Run(cb) {
    var query = util.format('UPDATE %s SET %s %s %s', this._table, this._set, this._where, this._limit)

    this._connection.queryPost(query, this._setArgs.concat(this._whereArgs), cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
