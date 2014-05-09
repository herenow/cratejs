var Crate = require('crate-connect');


/**
 * Methods extending
 */
Crate.prototype.Select = require('./src/select');
Crate.prototype.Insert = require('./src/insert');
Crate.prototype.Update = require('./src/update');
Crate.prototype.Delete = require('./src/delete');


/**
 * Expose CrateJS
 */
module.exports = Crate;
