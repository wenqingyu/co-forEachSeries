const forEach = require('./index.js');
const co = require('co');
const request = require("es6-request");

let urls = ['https://www.btcc.com', 'https://www.btcc.com', 'https://www.btcc.com', 'https://www.btcc.com', 'https://www.btcc.com', 'https://www.btcc.com'];

console.log('start');
forEach(urls, function(url, i) {
  return co(function*() {
    let result = yield request.get(url)
    .then((body) => {
      console.log(i, url, 'done!');
      return 'body';
    })
    return result;
  })
})
