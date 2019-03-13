const sieveOfEratosthenes = (num) => {
  // return all prime numbers up to num
  // in an array

  var numArray = [];
  var result = [];
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
for (let i = 0; i <= num; i++) {
  if (numArray[i]) result.push(i);
}
return result;
}
sieveOfEratosthenes(20);
