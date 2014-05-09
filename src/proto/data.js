/**
 * Prototype data
 */
var util = require('util');

module.exports = function data(_data) {
    //Reset to default
    this._prop.dataPlaceHolders = '';
    this._prop.dataArgs = [];
    this._prop.dataColumns = '';

    if(! _data.length) { //not array, convert it to an array
        _data = [_data];
    }

    for(var i in _data) {
        this._prop.dataPlaceHolders += '(';

        for(var k in _data[i]) {
            if(i == 0) { //Should only execute once
                this._prop.dataColumns += util.format('%s,', k);
            }
            this._prop.dataPlaceHolders += '?,';
            this._prop.dataArgs.push(_data[i][k]);
        }

        this._prop.dataPlaceHolders = this._prop.dataPlaceHolders.substring(0, this._prop.dataPlaceHolders.length - 1); //remove last comma
        this._prop.dataPlaceHolders += '),';
    }

    this._prop.dataColumns = this._prop.dataColumns.substring(0, this._prop.dataColumns.length - 1); //remove last comma
    this._prop.dataPlaceHolders = this._prop.dataPlaceHolders.substring(0, this._prop.dataPlaceHolders.length - 1); //remove last comma

    return new this.constructor(this._prop, this._connection);
}
