# co-foreach-series
This foreach-series support for es6 generator function.

## Install
npm install co-foreach-series --save


## Example
const foreach = require('co-foreach-series');
const co = require('co');
const request = require("es6-request");

let urls = ['https://github.com/wenqingyu', 'https://github.com/wenqingyu', 'https://github.com/wenqingyu'];
    // array      // element, index
forEach(urls, function(url, i) { //
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
