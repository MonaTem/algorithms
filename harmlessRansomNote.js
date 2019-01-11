const harmlessRansomNote = (noteText, magazineText) => {
  let noteArr = noteText.split(' ');
  let magazineArr = magazineText.split(' ');
  let magazineObj = {};
  magazineArr.forEach(word => {
    if (!magazineObj[word] ) magazineObj[word] = 0;
    magazineObj[word]++;
  });
  var noteIsPossible = true;
  noteArr.forEach(word => {
    if (!magazineObj[word]) {
         noteIsPossible = false;
    } else magazineObj[word]--;
    if (magazineObj[word] < 0) {
       noteIsPossible = false;
     }
  })
  return noteIsPossible;
};


let nText = 'the quick brown fox jumped over the hedge';
let mText = 'a fox is a beautiful animal.  I wish no one would kill a brown or red fox for its coat.  A hedge is a wall of shrubbery.  A quick and strong four legged animal such as a horse jumped over a hedge.  the human cannot perform such a jump on its measly two legs. the horse can, therefore the horse is superior to humans';

harmlessRansomNote(nText, mText);
