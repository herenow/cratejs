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
    return new Insert({table: _table}, this._connection);
}


/**
 * Insert constructor
 */
function Insert(options, connection) {
    options = options || {};
    this._connection = connection;

    //Insert query properties
    //Defaults:
    this._prop = {
        table: options.table || '',
        dataColumns: options.dataColumns || '',
        dataPlaceHolders: options.dataPlaceHolders || '',
        dataArgs: options.dataArgs || []
    }

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
    var query = util.format('INSERT INTO %s (%s) VALUES %s', this._prop.table, this._prop.dataColumns, this._prop.dataPlaceHolders);

    this._connection.queryPost(query, this._prop.dataArgs, cb);

    return this;
}


/**
 * Exports
 */
module.exports  = Init;
