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
	this.cluster = conf.cluster || [];    

	if(this.cluster.length > 0) { //They sent an array with the host/port of each cluster
        	this.load_balance = 'rr'; //Round-Robin
        	this.rr_count = 0;
        	this.lb_get = function() {
            		if(this.rr_count >= this.cluster.length) {
                		this.rr_count = 0;   
            		}
            		return this.cluster[ this.rr_count++ ];
        	}
    	}

	//TODO test connection method
}


/**
 * Send a query POST
 */
Connect.prototype.send = function POST(query, statements, callback) {
    var options = {
		method: 'POST',
		path:   '/_sql'
        //No need to specify Keep-Alive, node will use the default global agent
    }
    
    if(this.load_balance == 'rr') {
        var node = this.lb_get();

        options.host = node.host || 'localhost';
        options.port = node.port || 4200;
    }
	else {
		options.host = this.host;
		options.port = this.port;
	}
    
	var request = Http.request(options);
    
    //I really hope this query is sanatized!
	var data = {
		stmt: query
	}

	if(statements.length > 0) {
		data.args = statements;
	}
	
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
