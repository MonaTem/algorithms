const caesarCipher = (str, num) => {
  num = num % 26;
  lowerCaseStr = str.toLowerCase();
  let characterArray = lowerCaseStr.split('');
  let validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let caesarStr = '';
  let len = validCharacters.length;
  for (let i = 0; i < characterArray.length; i++) {
    let char = characterArray[i];
    if (char === ' ') {
      caesarStr = caesarStr + char;
      continue;
    }
    let newIdx = validCharacters.indexOf(char);
    if (newIdx > -1) {
      newIdx = (validCharacters.indexOf(char) + num);
      if (newIdx >= len) {
        newIdx = newIdx - len;
      }
    }
    if (newIdx < 0) {
      newIdx = newIdx + len;
    }
    let newChar = validCharacters[newIdx];
    if (str[i] === str[i].toUpperCase()) {
       caesarStr = caesarStr + newChar.toUpperCase();
    } else caesarStr = caesarStr + newChar;
  }

  return caesarStr;
};
caesarCipher('Zoo Keeper', 2);
// caesarCipher('buzzy');
// caesarCipher('butterflies are very free', 2);
// caesarCipher('a bear is brown in the woods', -3);
