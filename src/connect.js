/**
 * Dependencies
 */
var Http = require('http');


/**
 * Connect
 */
var Connect = function Contructor(conf) {
	this.host = conf.host || 'localhost';
	this.port = conf.port || 4200;
	this.user = conf.user || null;
	this.pass = conf.pass || null;

	//TODO test connection method
}


/**
 * Send a query POST
 */
Connect.prototype.send = function POST(query, statements, callback) {
	//I really hope this query is sanatized!
	var request = Http.request({
		method: 'POST',
		host:   this.host,
		port:   this.port,
		path:   '/_sql'
	});

	var data = {
		stmt: query
	}

	if(statements.length > 0) {
		data.args = statements;
	}
	
	console.log( JSON.stringify(data) );

	request.write( JSON.stringify(data) );
	request.end();

	if(typeof callback === 'function') {
		request.on('response', function(res) {
			var buf = '';
			
			res.on('data', function(data) {
				buf += data;
			});

			res.on('end', function() {
				callback(JSON.parse(buf));
			});
		});
	}
}


/**
 * Exports
 */
module.exports = Connect;
