const sortNumbers = (a, b) => {
  return a > b ? 1 : b > a ? -1 : 0;
}

const getMean = (array) => {
  var total = 0;
  array.forEach(element => {
    total+=element;
  })
  mean = total/array.length;
  return mean;
}

const getMedian = (array) => {
  let modulo = array.length % 2;
  if (modulo === 0 ) {
    medIdx = array.length / 2 - 1 ;
    median = (array[medIdx] + array[medIdx + 1]) / 2;
   } else median = array[(array.length + 1) / 2];
return median;
}

const getMode = (array) => {

  let total = 0;
  let biggestTotal = 0;
  let storeElement = 0;

  array.forEach(element => {
     if (storeElement !== element ) {
       storeElement = element;
       total = 1;
     } else total++;

     if ((total > 1) && (total >= biggestTotal)) {
       biggestTotal = total;
       if (mode[0] == 'none') {
         mode.pop();
       }
       if (!mode.includes(element)) {
           mode.push(element);
       }
     }
  })
  mode = mode.join(', ');
  return mode;
}


const meanMedianMode = (array) => {
  array.sort(sortNumbers);
  getMean(array);
  getMedian(array);
  getMode(array);
  return { mean,  median, mode };
}

// var array = [1, 2, 4, 7];
// var array = [8, 9, 10, 10, 10, 11, 11, 11, 12, 13];
var array = [13, 18, 13, 14, 13, 16, 14, 21, 13];
var mean = 0;
var median = 0;
var mode = ['none'];
meanMedianMode(array);
