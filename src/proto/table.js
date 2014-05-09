/**
 * Prototype table
 */
var util = require('util');

module.exports = function table(_table) {
    this._prop.table = util.format('%s', _table);

    return new this.constructor(this._prop, this._connection);
}
