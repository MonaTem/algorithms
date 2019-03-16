const sortNumbers = (a, b) => {
  return a > b ? 1 : b > a ? -1 : 0;
}

const maxStockProfit = (pricesArr) => {
// takes in array of prices as a parameter
// returns the maximum possible profit of the day
// If no profit possible, return -1
// Profit of zero treated like any other profit
  let maxProfitToday = 0;
  pricesArr.sort(sortNumbers);
  console.log(pricesArr);
  maxProfitToday =
      pricesArr[pricesArr.length - 1] -
      pricesArr[0];
  console.log(maxProfitToday);
  if (maxProfitToday >= 0) {
     return maxProfitToday;
  } else return -1;
}

maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
