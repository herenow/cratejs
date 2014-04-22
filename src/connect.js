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
Connect.send = function POST(query, statements, callback) {
	//I really hope this query is sanatized!
	var request = Http.request({
		method: 'POST',
		host:   this.host,
		port:   this.port,
		path:   '/_sql'
	}, callback);

	var data = {
		stmt: query,
		args: statements
	}
	
	request.write( JSON.stringify(data) );
	request.end();
}
