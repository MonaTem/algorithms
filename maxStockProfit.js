const maxStockProfit = (pricesArr) => {
// takes in array of prices as a parameter
// returns the maximum possible profit of the day
// If no profit possible, return -1
// Profit of zero treated like any other profit

let maxProfit = -1;
let buyPrice = 0;
let sellPrice = 0;
// let changePrice = false;

  for (i = 0; i < pricesArr.length; i++) {

    if (i === 0) {
      buyPrice = pricesArr[i];
      sellPrice = pricesArr[i + 1];
    }

    if (pricesArr[i+1] > sellPrice) {
      sellPrice = pricesArr[i+1];
    }

    if (pricesArr[i] < buyPrice){
      buyPrice = pricesArr[i];
      sellPrice = 0;
    }

  }

  if (sellPrice >= buyPrice) {
    maxProfit = sellPrice - buyPrice;
  }
  return maxProfit;
}



// maxStockProfit([32, 46, 26, 38, 40, 48, 42]);
// maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]);
maxStockProfit([0, 400, 3, 600, 4, 500]);
