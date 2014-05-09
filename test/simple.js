var assert = require('assert');
var Crate  = require('../index');

var db = new Crate({
	host: process.env.CRATE_TEST_HOST || '127.0.0.1',
	port: process.env.CRATE_TEST_PORT || 4200,
});

describe('Cratejs', function() {

	it('db.Select()', function(done) {
		var select = db.Select('sys.cluster').columns(['id', 'name']).limit(1).order('id', 'desc');

		select.run(done);
	});

	it('db.execute() - Create a sample table', function(done) {
		db.execute('CREATE TABLE sample (bar integer, id integer, sample string)', [100], function(err, res) {
			console.log(err, res);
			done();
		});
	});

	it('db.Insert()', function(done) {
		var insert = db.Insert('sample');

		insert.data({
			bar: 1,
			id: 2,
			sample: 'asdas',
		}).run(done);
	});

	it('db.Update()', function(done) {
		var update = db.Update('sample');

		update.set({
			bar: 2,
		}).where({
			id: 2,
		}).run(done);
	});

	it('db.Delete()', function(done) {
		var _delete = db.Delete('sample');

		_delete.where({
			id: 2,
		}).run(done);
	});

});
