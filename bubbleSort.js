const bubbleSort = (array) => {
  // return array sorted with bubble sort
  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j+1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
      }
    }
 }
return array;
}
bubbleSort([5, 3, 8, 2, 1, 4]);
