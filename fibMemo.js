const fibMemo = (index, cache) => {
// index: index of number in Fibonacci sequence
// cache: an array used as memory
cache = cache || [];
  if (cache[index]) {
      return cache[index];
  } else {
    if (index <= 2) {
        return 1;
    } else {
      cache[index] = fibMemo(index-2, cache) +
      fibMemo(index-1, cache);
      return cache[index];
      }
  }
}
fibMemo(12);
