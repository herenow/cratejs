CrateJS
=======

A simple driver to access your Crate data storage.


Installation
----------
```
npm install cratejs
```


Sample usage
----------

```javascript
var Crate = require('cratejs');

//You can have as many db instance as you please :)
//You should probably add this part to another module and export it!
var db = new Crate({
  host: 'localhost', //Defaults to localhost
  port: 4200 //Defaults to 4200
});

//Now lets build some queries, using placeholders, you can either use ? or $1, $2, $3...
var q = {
  getSomeTweets: db.Query('SELECT text FROM tweets LIMIT ?'),
  getReTweeted:  db.Query('SELECT * FROM tweets WHERE retweeted = $1 LIMIT $2') 
};

//Now lets run our queries
q.getSomeTweets.execute([10], function(res) {
  if(res.error) {
    //Do something
    return;
  }
  
  console.log('Returned %d rows', res.rowcount);
  console.log('Columns returned:\n', res.cols);
  console.log(res.rows);
}

//The other query
q.getReTweeted.execute([true, 10], function(res) {
  if(res.error) {
    //Do something
    return;
  }
  
  console.log('Returned %d rows', res.rowcount);
  console.log('Columns returned:\n', res.cols);
  console.log(res.rows);
}

//So basically, what we are doing is:
//new Crate().Query(someQuery).execute([statements], callback);
```


Authors
---------
This was created for the Crate.io data Storage.
- [herenow](https://github.com/herenow)


Thanks to
----------
Nobody yet :(
