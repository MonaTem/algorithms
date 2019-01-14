const reverseWords = (string) => {
  let reverseArray = [];
  reverseArray = string.split(' ');
  reverseWordString = '';
  reverseArray.forEach(word => {
     let letterArray = word.split('');
     let reverseWord = '';
     for (let i = word.length-1; i >= 0; i--) {
        reverseWord += word[i];
     }
  reverseWordString = reverseWordString +  reverseWord + ' ';
  });
  console.log(reverseWordString);

};

reverseWords('this is a string of words');
