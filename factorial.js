const factorial = (num) => {

  if (num === 1) {
     return num;
  } else { var factorial_nbr = num * num - 1;
           num--;
           factorial(num);
         }
     return factorial_nbr
}
factorial(4);
