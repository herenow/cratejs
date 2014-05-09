/**
 * Prototype data
 */
var util = require('util');

module.exports = function data(_data) {
    this._dataArgs = []; //clean

    if(! _data.length) { //not array, convert it to an array
        _data = [_data];
    }

    for(var i in _data) {
        this._dataHolders += '(';

        for(var k in _data[i]) {
            if(i == 0) { //Should only execute once
                this._dataColumns += util.format('%s,', k);
            }
            this._dataHolders += '?,';
            this._dataArgs.push(_data[i][k]);
        }

        this._dataHolders = this._dataHolders.substring(0, this._dataHolders.length - 1); //remove last comma
        this._dataHolders += '),';
    }

    this._dataColumns = this._dataColumns.substring(0, this._dataColumns.length - 1); //remove last comma
    this._dataHolders = this._dataHolders.substring(0, this._dataHolders.length - 1); //remove last comma

    return this;
}
