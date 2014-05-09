/**
 * Prototype order
 */
var util = require('util');

module.exports = function order(_column, _order) {
    if(arguments.length === 0) {
        this._prop.order = '';
    }
    else {
        this._prop.order = util.format('ORDER BY %s %s', _column, _order.toUpperCase());
    }

    return new this.constructor(this._prop, this._connection);
}
