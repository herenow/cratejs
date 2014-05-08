var assert = require('assert');

var Crate, db, query;

describe('Cratejs', function() {

	describe('Try to initiate a CrateJS client', function(){
		it('Should initiate a CreateJS client', function() {
            Crate = require('../index.js');
            db = new Crate();
	});
	});

	describe('Build some queries', function(){
		it('Should build some queries', function() {
            query = [
                db.Query('SELECT * FROM sys.cluster LIMIT ?')
            ];
		});
	});

	describe('Now try to query the dabtase', function(){
		it('Should return an rows from the query', function(done) {
			query[0].execute([100], function(res) {
				if(res.error) {
					return done(res.error);
				}
				else if(res.rowcount < 1) {
					return done('no rows returned');
				}
				done();
			});
		});
        it('Should return an rows from the query (direct execution)', function(done) {
            db.execute('SELECT * FROM sys.cluster LIMIT ?', [100], function(res) {
                if(res.error) {
                    return done(res.error);
                }
                else if(res.rowcount < 1) {
                    return done('no rows returned');
                }
                done();
            });
        });
	});


});
