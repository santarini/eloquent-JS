///
var arrayToList = function(arr) {
  var list = null;
  for(i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}
