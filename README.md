CrateJS
=======
[![Build Status](https://travis-ci.org/herenow/cratejs.svg?branch=master)](https://travis-ci.org/herenow/cratejs)

An extension to [crate-connect](https://github.com/herenow/crate-connect), CrateJS will provide you with better methods for working with [Crate.io](https://www.crate.io/).


Installation
----------
```
npm install cratejs
```


Connecting
----------
```javascript
var Crate = require('cratejs');

//You can have as many db instance as you please :)
//You should probably add this part to another module and export it!
var db = module.exports = new Crate({
  host: 'localhost',
  port: 4200,
  /* Optional manual clustering
  cluster: [
      {
          host: '192.168.0.100',
          port: 4200,
      }
  ]
  */
});
```
* The "db" variable will be used in the examples below.


Sample docs
----------

***db.Select(tableName)***
```javascript
var findBars = db.Select('fooTable')
    .columns(['id', 'name', 'bar'])
    .where({
        bar: 1
    })
    .limit(1)
    .order('id', 'asc');

findBars.run(function(err, res) {});
```

***db.Insert(tableName)***
```javascript
var insertBars = db.Insert('fooTable');

//Inserting a single row
insertBars.data({
    bar: 1
}).run(function(err, res) {});

//Inserting multiple rows
insertBars.data([
    {
        bar: 1
    },
    {
        bar: 2
    },
]).run(function(err, res) {});
```

***db.Update(tableName)***
```javascript
var updateBars = db.Update('fooTable')
    .where({
        bar: 1
    })
    .set({
        bar: 2
    });

updateBars.run(function(err, res) {});
```

***db.Delete(tableName)***
```javascript
var deleteBars = db.Delete('fooTable')
    .wh11g10ggere({
        bar: 1
    });

deleteBars.run(function(err, res) {});
```

Methods inherited from crate-connect
----------

***db.Query(_queryString)***
```javascript
var getSomeTweets = db.Query('SELECT * FROM tweets LIMIT ?');

var howMany = 10;

getSomeTweets.execute([howMany], function(err, res) {});
```

***db.execute(_queryString)***
```javascript
db.execute('SELECT * FROM tweets LIMIT ?', [10], function(err, response) {});
```

***blob().put(table, sha1Hash, buffer, callback)***
```javascript
var buffer = new Buffer('sample')
var hash = crypto.createHash('sha1').update(buffer).digest('hex')

####blob().put('imagesTable', hash, buffer, function(err) {
    if(err) {
        //err.statusCode
    }
})
```
* Note that if the sha1 hash is not correct, the blob wont be inserted. **The sha1 hash must be calculated from the blob to be inserted.**


***blob().get(table, sha1Hash, callback)***
```javascript
db.blob().get('imagesTable', '8151325dcdbae9e0ff95f9f9658432dbedfdb209', function(err, buffer) {
    if(err) {
        //err.statusCode
    }
})
```

***blob().check(table, sha1Hash, callback)***
```javascript
db.blob().check('imagesTable', '8151325dcdbae9e0ff95f9f9658432dbedfdb209', function(err) {
    if(err) {
        //err.statusCode
    }
})
```

***blob().delete(table, sha1Hash, callback)***
```javascript
db.blob().check('imagesTable', '8151325dcdbae9e0ff95f9f9658432dbedfdb209', function(err) {
    if(err) {
        //err.statusCode
    }
})
```


TODO
---------
* Blob helper
* Indexing helpers
* Shards and replicas helper
* Try out a binary connector


Contributors
---------
This was created for the Crate.io data Storage.
- [herenow](https://github.com/herenow)
