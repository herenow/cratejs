/**
 * Prototype where
 */
var util = require('util');

module.exports = function where(_where) {
    if(arguments.length === 0) {
        this._prop.where = '';
    }
    else {
        this._prop.where = 'WHERE ';
        this._prop.whereArgs = []; //clean

        for(var k in _where) {
            this._prop.where += util.format('%s = ? AND ', k);
            this._prop.whereArgs.push(_where[k]);
        }

        this._prop.where = this._prop.where.substring(0, this._prop.where.length - 5); //remove last "AND"
    }

    return new this.constructor(this._prop, this._connection);
}
