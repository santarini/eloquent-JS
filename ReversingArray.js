//////////////////

function reverseArray(trgt){
  var revArray = [];
  var i = 0;
  var j = trgt.length - 1;
  while(i <= j){
    revArray.push(trgt[j]);
    j -=1;
  }
  return revArray;
}

///////////////

