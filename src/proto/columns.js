/**
 * Prototype columns
 */
var util = require('util');

module.exports = function columns(_columns) {
    if(arguments.length === 0) {
        this._prop.columns = '*';
    }
    else {
        if(typeof _columns === 'string') {
            _columns = [_columns];
        }

        this._prop.columns = util.format('%s', _columns.join(','));
    }

    return new this.constructor(this._prop, this._connection);
}
