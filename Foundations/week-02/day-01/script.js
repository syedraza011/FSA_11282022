/* Write your code here! */
function exclaim(string){
  return string+"!";
}
// getAreaOfTrapezoid,
function getAreaOfTrapezoid(a, b, h){
  if(Number.isInteger(a) && Number.isInteger(b) &&Number.isInteger(h)) {
    let area=0;
    area=(a+b/2)* h;
    return area;
  }
}
  // isStringTooLong,
  function isStringTooLong(string){
    if(string.length>=26){
      return true;
    }
    return false;
  }
  // alternateCaps,
  function alternateCaps(string){
    let newStr='';
    for(let i=0;i<string.length;i++){
      let char=string[i];
      if(i%2 !=0){
        newStr +=char.toUpperCase();
      } else {
        newStr +=char;
      }
    }
    return newStr;
  }
  // reverse,
  function reverse(array) {
    let newArr=[];
    for(let i=array.length-1;i>=0;i--){
      let ele=array[i];
      newArr.push(ele);
    }
    return newArr;
  }
  // getMostVowels,
  function getMostVowels(string){

    let words=string.split();
    for(let i=0;i<words.length;i++){
      let word=words[i];
      if(currMax<mostVowels(word)){

      }
    }
    function mostVowels(word){
      let count=0;
      vowels="aeiouAEIOU";
      if(word.inlcudes(vowels)){
        count +=1;
      }
    }
    return count;
  }
  // createMultiplicationTable,
/* Write your code here! */

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
  exclaim,
  // getAreaOfTrapezoid,
  // isStringTooLong,
  // alternateCaps,
  // reverse,
  // getMostVowels,
  // createMultiplicationTable,
};
