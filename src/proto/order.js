/**
 * Prototype order
 */
var util = require('util');

module.exports = function order(_column, _order) {
    if(arguments.length === 0) {
        this._order = '';
        return this;
    }

    this._order = util.format('ORDER BY %s %s', _column, _order.toUpperCase());

    return this;
}
