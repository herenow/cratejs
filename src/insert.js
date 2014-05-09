/**
 * Insert db method
 */
var util    = require('util');
var table   = require('./proto/table');
var data   = require('./proto/data');


/**
 * db.Insert() - initiator
 */
function Init(_table) {
    return new Insert(_table, this._connection);
}


/**
 * Insert constructor
 */
function Insert(_table, connection) {
    this._connection = connection;

    //defaults
    this._table       = _table || '';
    this._dataColumns = '';
    this._dataHolders = '';
    this._dataArgs    = [];

    return this;
}


/**
 * Prototypes
 */
Insert.prototype.data  = data;
Insert.prototype.table = table;


/**
 * Run
 */
Insert.prototype.run = function Run(cb) {
    var query = util.format('INSERT INTO %s (%s) VALUES %s', this._table, this._dataColumns, this._dataHolders);

    console.log(query)

    this._connection.queryPost(query, this._dataArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
