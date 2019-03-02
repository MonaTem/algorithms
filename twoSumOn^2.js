const twoSum = (numArray, sum) => {
  let sumArray = [];
  let sumsArray = [];
  for (let i = numArray.length - 1 ; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      if (numArray[i] + numArray[j] === sum) {
        sumArray.push(numArray[i], numArray[j]);
        sumsArray.push(sumArray);
        sumArray = [];
        numArray.pop();
      }
    }
  }
  return sumsArray;
}

var numArray = [1, 6, 4, 5, 3, 3];
var sum = 7;
twoSum(numArray, sum);
