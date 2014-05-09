/**
 * Prototype where
 */
var util = require('util');

module.exports = function where(_where) {
    if(arguments.length === 0) {
        this._where = '';
        return this;
    }

    this._where = 'WHERE ';
    this._whereArgs = []; //clean

    for(var k in _where) {
        this._where += util.format('%s = ? AND ', k);
        this._whereArgs.push(_where[k]);
    }

    this._where = this._where.substring(0, this._where.length - 5); //remove last "AND"

    return this;
}
