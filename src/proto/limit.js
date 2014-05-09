/**
 * Prototype limit
 */
var util = require('util');

module.exports = function limit(_limit, _until) {
    if(arguments.length === 0) {
        this.__prop.limit = '';
    }
    if(arguments.length === 2) {
        this.__prop.limit = util.format('LIMIT %d, %d', _limit, _until);
    }
    else {
        this._prop.limit = util.format('LIMIT %d', _limit);
    }

    return new this.constructor(this._prop, this._connection);
}
