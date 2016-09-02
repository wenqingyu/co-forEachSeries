const forEach = require('./index.js');
const co = require('co');
const request = require("es6-request");

let urls = ['https://github.com/wenqingyu', 'https://github.com/wenqingyu', 'https://github.com/wenqingyu'];

forEach(urls, function(url, i) {
  return co(function*() {
    let result = yield request.get(url)
    .then((body) => {
      console.log(body);
      return body;
    })
    return result;
  })
})
