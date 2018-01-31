//Recieves an array and turns it into a list

var arrayToList = function(array) {
  var list = null;
  for(i = array.length - 1; i >= 0; i--) {
    list = { value: array[i], rest: list };
  }
  return list;
}

//
