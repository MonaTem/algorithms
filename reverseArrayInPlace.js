const reverseArrayInPlace = (arr) => {
  for (i = 0; i < arr.length / 2; i++) {
    var tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  return arr;
}
var arr = ['1', '2', '3', '4', '5'];
reverseArrayInPlace(arr);
