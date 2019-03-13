const sieveOfEratosthenes = (num) => {
  // return all prime numbers up to num
  // in an array

  var numArray = [];
  numArray[0] = false;
  numArray[1] = false;
  for (let i = 2; i <= num; i++) {
    numArray[i] = true;
  }

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    for (let j = 4; j <= num; j++) {
      if (j % i === 0) {
        numArray[j] = false;
      }
    }
  }
return numArray;
}
sieveOfEratosthenes(20);
