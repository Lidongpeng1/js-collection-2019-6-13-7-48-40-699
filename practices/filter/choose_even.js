'use strict';

function choose_even(collection) {
  var collectionA = [];
  for(let i = 0;i <= collection.length;i++){
    if(collection[i] % 2 == 0){
      collectionA.push(collection[i]);
    }
  }
  return collectionA;
  //implement here
}
module.exports = choose_even;
