'use strict';
//var collection = [0, 1, 2, 3, 4, 6];
function choose_multiples_of_three(collection) {
  var collectionA = [];
  for(let i = 0;i <= collection.length;i++){
    if(collection[i] % 3 == 0){
      collectionA.push(collection[i]);
    }
  }
  
  return collectionA;
  //implement here
  // return collection.filter(multiples_of_three);
  // var result =collection.filter(number => {
  //   return number % 3 === 0;
  // })
  // return result;  
}
module.exports = choose_multiples_of_three;
