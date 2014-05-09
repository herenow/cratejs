/**
 * Prototype set
 */
var util = require('util');

module.exports = function set(_set) {
    for(var k in _set) {
        this._set += util.format('%s = ?,', k);
        this._setArgs.push(_set[k]);
    }

    this._set = this._set.substring(0, this._set.length - 1);

    return this;
}
