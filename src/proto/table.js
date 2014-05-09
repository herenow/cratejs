/**
 * Prototype table
 */
var util = require('util');

module.exports = function table(_table) {
    this._table = util.format('%s', _table);

    return this;
}
