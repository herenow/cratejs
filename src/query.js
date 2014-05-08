/**
 * Libs
 */
var Execute = require('./execute');


/**
 * db.Query() - Contructor
 */
var Query = function Query(str) {
    this._queryString = str;

	return {
        execute: Execute.query.bind(this) //I should be prototyping :(
                                          //But this code is being refactored
                                          //I know this is ugly :(
    };
}


/**
 * Exports
 */
module.exports = Query;
