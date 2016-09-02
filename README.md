# co-foreach-series
This foreach-series support for es6 generator function.

co-foreach-series allows you to traverse array elements and process with async task one by one. It's something like Async.forEeachSeries();

However, if you want to go through array element and process async tasks them paralelly with generator, you should take a look of https://github.com/ivpusic/co-foreach.

## Install
``` npm install co-foreach-series --save ```

### Include
```
const foreach = require('co-foreach-series');
```


## Example
```
const foreach = require('co-foreach-series');
const co = require('co');
const request = require("es6-request");

let urls = ['https://github.com/wenqingyu', 'https://github.com/wenqingyu', 'https://github.com/wenqingyu'];
     // array      // element, index
forEach(urls, function(url,    i) { //
  return co(function*() {
    let result = yield request.get(url) // async function
    .then((body) => {
      console.log(body);
      return body;
    })

    // wait until async function finished, you can do other process
    return result;
  })
})
```
