/**
 * Prototype data
 */
var util = require('util');

module.exports = function data(_data) {
    this._dataArgs = []; //clean

    if(_data.length > 0) { //in as array, so multiple inserts at once
        for(var i in _data) {
            for(var k in _data[i]) {
                this._dataColumns += util.format('%s,', k);
                this._dataHolders += '?,';
                this._dataArgs.push(_data[i][k]);
            }

            this._dataColumns = this._dataColumns.substring(0, this._dataColumns.length - 1);
            this._dataHolders = '(' + this._dataHolders.substring(0, this._dataHolders.length - 1) + '),';
        }
        this._dataHolders = this._dataHolders.substring(0, this._dataHolders.length - 1);
    }
    else {
        for(var k in _data) {
            this._dataColumns += util.format('%s,', k);
            this._dataHolders += '?,';
            this._dataArgs.push(_data[k]);
        }

        this._dataColumns = this._dataColumns.substring(0, this._dataColumns.length - 1);
        this._dataHolders = '(' + this._dataHolders.substring(0, this._dataHolders.length - 1) + ')';
    }

    return this;
}
