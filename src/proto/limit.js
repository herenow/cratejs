/**
 * Prototype limit
 */
var util = require('util');

module.exports = function limit(_limit, _until) {
    if(arguments.length === 0) {
        this._limit = '';
    }
    if(arguments.length === 2) {
        this._limit = util.format('LIMIT %d, %d', _limit, _until);
    }
    else {
        this._limit = util.format('LIMIT %d', _limit);
    }

    return this;
}
