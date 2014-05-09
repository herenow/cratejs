/**
 * Prototype set
 */
var util = require('util');

module.exports = function set(_set) {
    for(var k in _set) {
        this._prop.set += util.format('%s = ?,', k);
        this._prop.setArgs.push(_set[k]);
    }

    this._prop.set = this._prop.set.substring(0, this._prop.set.length - 1);

    return new this.constructor(this._prop, this._connection);
}
