CrateJS
=======

* Under development, CrateJS was moved to [crate-connect](https://github.com/herenow/crate-connect), use it for now.

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
var db = new Crate({
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
    .where({
        bar: 1
    })
    .limit(1);

deleteBars.run(function(err, res) {});
```


TODO
---------
* Everything


Authors
---------
This was created for the Crate.io data Storage.
- [herenow](https://github.com/herenow)


Thanks to
----------
Nobody yet :(
