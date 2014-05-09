var assert = require('assert');

var Crate, db, query;

describe('Cratejs', function() {

	describe('Try to initiate a CrateJS client', function(){
		it('Should initiate a CreateJS client', function() {
            Crate = require('../index.js');
            db = new Crate({
				host: process.env.CRATE_TEST_HOST || '127.0.0.1',
				port: process.env.CRATE_TEST_PORT || 4200,
			});
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
			query[0].execute([100], function(err, res) {
				if(err) {
					return done(err);
				}
				else if(res.rowcount < 1) {
					return done('no rows returned');
				}
				console.log(res);
				done();
			});
		});
        it('Should return an rows from the query (direct execution)', function(done) {
            db.execute('SELECT * FROM sys.cluster LIMIT ?', [100], function(err, res) {
                if(err) {
                    return done(err);
                }
                else if(res.rowcount < 1) {
                    return done('no rows returned');
                }
				console.log(res);
                done();
            });
        });
		it('Should return create a sample table', function(done) {
			db.execute('CREATE TABLE sample (bar integer, id integer, sample string)', [100], function(err, res) {
				if(err) {
					console.log(err, res)
				}
				done();
			});
		});
	});

	describe('Extended methods', function(){
		it('db.Select', function(done) {
			db.Select('sys.cluster').run(function(err, res) {
					console.log(err, res);
					done();
			})
		});
		it('db.Insert', function(done) {
			db.Insert('sample').data([{
				bar: 1,
				id: 2,
				sample: 'asdas',
			}, {
				bar: 1,
				id: 2,
				sample: 'asdas',
			}]).run(function(err, res) {
					console.log(err, res);
					done();
			})
		});
	});


});
