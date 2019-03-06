const twoSum = (numArray, sum) => {
  var pairs = [];
  var hashtable = [];

for (i = 0; i < numArray.length; i++)  {
  var currNum = numArray[i];
  var diff = sum - currNum;
  hashtable.push(currNum);
  if (hashtable.includes(diff)) {
    pairs.push([currNum, diff]);
  }
}
return pairs;
}; 

// var numArray = [1, 6, 4, 5, 3, 3];
// var sum = 7;
var numArray = [40, 11, 19, 17, -12];
var sum = 28;
twoSum(numArray, sum);
