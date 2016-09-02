const co = require('co');


function recursion(array, index, fn){
  return co(function*(){
    yield fn(array[index], index); // process function
    index ++;
    if(index > array.length - 1){
      return ; // last one, return
    }else{
      return recursion(array, index, fn); // call next iterator
    }
  })
}

module.exports = function(array, fn){
  return co(function*() {
    if (!Array.isArray(array)) {

      return reject('co-forEachSeries accepts array as first argument!');
    }
    if(array.length < 1) {
      return resolve();
    }
    yield recursion(array, 0, fn);
    return ;
  })

}
