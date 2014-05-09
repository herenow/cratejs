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
    return new Update({table: _table}, this._connection);
}


/**
 * Update constructor
 */
function Update(options, connection) {
    options = options || {};
    this._connection = connection;

    //defaults
    this._prop = {
        table: options.table || '',
        set: options.set || '',
        setArgs: options.setArgs || [],
        where: options.where || '',
        whereArgs: options.whereArgs || [],
    }

    return this;
}


/**
 * Prototypes
 */
Update.prototype.set   = set;
Update.prototype.table = table;
Update.prototype.where = where;


/**
 * Run
 */
Update.prototype.run = function Run(cb) {
    var query = util.format('UPDATE %s SET %s %s', this._prop.table, this._prop.set, this._prop.where)

    this._connection.queryPost(query, this._prop.setArgs.concat(this._prop.whereArgs), cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
