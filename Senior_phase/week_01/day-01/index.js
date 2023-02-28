let word = "heloro wworld";
let sub = "or";
function findString(sub, word) {
  for (let i = 0; i < word.length - sub.length; i++) {
    for (let j = 0; j < sub.length; j++) {
      if (word[i]=== sub[j]) {
    
        if (sub[i + 1] === sub[j + 1])  {
          return i;
        }
      }
    }
  }
  return -1;
}

console.log(findString(sub, word));
