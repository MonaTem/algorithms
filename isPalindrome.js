const isPalindrome = (str) => {
  str = str.toLowerCase();
  charactersArray = str.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  var lettersArray = [];
  charactersArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      lettersArray.push(char);
    }
  });
  if (lettersArray.join('') === lettersArray.reverse().join('')) {
    return true;
  } else return false;
};

// isPalindrome("Madam I'm Adam");
// isPalindrome("race car");
// isPalindrome('butterfly');
isPalindrome("I'm a monkey's uncle");
