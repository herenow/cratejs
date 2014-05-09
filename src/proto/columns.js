/**
 * Prototype columns
 */
var util = require('util');

module.exports = function columns(_columns) {
    if(arguments.length === 0) {
        this._columns = '*';
        return this;
    }

    if(typeof _columns === 'string') {
        _columns = [_columns];
    }

    this._columns = util.format('%s', _columns.join(','));

    return this;
}
