const binarySearch = (numArray, key) => {
  var middleIdx = Math.floor(numArray.length / 2);
  var middleElement = numArray[middleIdx];
  // console.log(middleIdx, middleElement);
  if (middleElement === key) return true;
  else if (middleElement < key && numArray.length > 1)
    return binarySearch(numArray.splice(middleIdx, numArray.length), key);
  else if (middleElement > key && numArray.length > 1)
    return binarySearch(numArray.splice(numArray.indexOf(key), middleIdx), key);
  else return false;
}

// binarySearch([5, 7, 12, 36, 39, 42, 56, 71], 56);
// binarySearch([3, 5, 7], 6);
// binarySearch([2, 4, 6, 8, 10, 12], 12);
binarySearch([2, 4, 6, 8, 10, 12], 13);
