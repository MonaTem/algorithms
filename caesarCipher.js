const caesarCipher = (str, num) => {
  str = str.toLowerCase();
  let characterArray = str.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let caesarArray = [];
  let caesarStr = '';
  characterArray.forEach(char => {
    if (validCharacters.indexOf(char) > -1) {
      let newIdx = (validCharacters.indexOf(char) + num);
      if (newIdx >= validCharacters.length) {
        newIdx = newIdx - validCharacters.length;
      }  else if (newIdx < 0) {
         newIdx = newIdx + validCharacters.length;
      }
      caesarArray.push(validCharacters[newIdx]);
    } else if (char === ' ') caesarArray.push(char);
  caesarStr = caesarArray.join('') ;
  });
  return caesarStr;
};
// caesarCipher('Zoo Keeper', 5);
// caesarCipher('buzzy');
// caesarCipher('butterflies are very free');
caesarCipher('a bear is brown in the woods', -3);
