/**
 * Init pooint
 */
var Crate = module.exports = function Init(conf) {
	var Controller = request('./src/main')(conf);

	return Controller;
}
