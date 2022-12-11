// console.log(factorial("5"))
// function factorial(n) {
//     let fact = 1;
//     if (n <= 0) {
//         return 1;
//     }
//     else if (typeof n != "string") {
//         for (let i = n; i >= 1; i--) {
//             fact =fact*i;
//         }
//      } else {
//         return "error";
//         }
//     return fact;
//     }
//-----------------------------------------------
console.log(buildNArray(5))
function buildNArray(n) {
    let array = [];
    if (n <= 0) {
        return array;
    } else if (Number.isInteger(n)) {
        for (let i = 1; i <= n; i++) {
            array.push(i);
        }

    } else {
        return "error";
    }
    return array;
}
//------------------------------------------------

// findLongestString,
// function findLongestString(arr) {
//     let longestString = "";
//     let prevLongest = "";
//     if (arr.length < 1) {
//       return longestString;
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr[i];
//         if (longestString.length < curr.length) {
//           longestString = curr;
//         }
//       }
//     }
//     return longestString;
//   }
//--------------------------------
// input
// let attendance=[false,false];
// console.log(countPresent(attendance));
// function countPresent(attendance){
//     let students=0;
//     for(let i=0;i<attendance.length;i++){
//         if(attendance[i]===true){
//             students +=1;
//         }
//     }
//     return students;
// }
//-------------------------------------------
// function getDnaComplement(dna){
//     let complimentedStr="";
//     for(let i=0;i<dna.length;i++){
//         let char=dna[i];
//         if(char==='T')
//         {
//             complimentedStr +='A';
//         }
//         else if(char==='A')
//         {
//             complimentedStr +='T';
//         }
//         else if(char==='G')
//         {
//             complimentedStr +='C';
//         }
//         else if(char==='C')
//         {
//             complimentedStr +='G';
//         }
//     }
//     return complimentedStr;
// }
//--------------------------------

// isAllEven,
// let numbers = [2, 4, 5, 8];
// console.log(isAllEven(numbers));
// function isAllEven(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     if (num % 2 != 0) {
//       return false;
//     }
//   }
//   return true;
// }
//__________________________________________
//evenAndOdd
// let numbers=[1,2,3,4,5,6]
// console.log(evenAndOdd(numbers));
// function evenAndOdd(numbers) {
//     let evenOdd=[];
//     let even=[];
//     let odd=[];
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i];
//     if (num % 2 != 0) {
//         odd.push(num)
//     }
//     else {
//         even.push(num)
//     }
//     }
//     evenOdd.push(even,odd);
//     return evenOdd;
// }
//-----------------------------------
// console.log(exponentiate(2, 3));
// function exponentiate(b, p) {
//   let exponent = 1;
//   for (let i = 1; i <= p; i++) {
//     exponent = exponent * b;
//   }
//   return exponent;
// }
//------------------------------------------

// function onlyOdd(number) {
//   let sumOfOdd = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 != 0) {
//       sumOfOdd += i;
//     }
//   }
//   return sumOfOdd;
// }
// console.log(factorial("5"))
// function factorial(n) {
//     let fact = 1;
//     if (n <= 0) {
//         return 1;
//     }
//     else if (typeof n != "string") {
//         for (let i = n; i >= 1; i--) {
//             fact =fact*i;
//         }
//      } else {
//         return "error";
//         }
//     return fact;
//     }
//-----------------------------------------------
// console.log(buildNArray(5))
// function buildNArray(n) {
//     let array = [];
//     if (n <= 0) {
//         return array;
//     } else if (Number.isInteger(n)) {
//         for (let i = 1; i <= n; i++) {
//             array.push(i);
//         }

//     } else {
//         return "error";
//     }
//     return array;
// }
//------------------------------------------------

// findLongestString,
// function findLongestString(arr) {
//     let longestString = "";
//     let prevLongest = "";
//     if (arr.length < 1) {
//       return longestString;
//     } else {
//       for (let i = 0; i < arr.length; i++) {
//         let curr = arr[i];
//         if (longestString.length < curr.length) {
//           longestString = curr;
//         }
//       }
//     }
//     return longestString;
//   }
//--------------------------------
// input
// let attendance=[false,false];
// console.log(countPresent(attendance));
// function countPresent(attendance){
//     let students=0;
//     for(let i=0;i<attendance.length;i++){
//         if(attendance[i]===true){
//             students +=1;
//         }
//     }
//     return students;
// }
//-------------------------------------------
// function getDnaComplement(dna){
//     let complimentedStr="";
//     for(let i=0;i<dna.length;i++){
//         let char=dna[i];
//         if(char==='T')
//         {
//             complimentedStr +='A';
//         }
//         else if(char==='A')
//         {
//             complimentedStr +='T';
//         }
//         else if(char==='G')
//         {
//             complimentedStr +='C';
//         }
//         else if(char==='C')
//         {
//             complimentedStr +='G';
//         }
//     }
//     return complimentedStr;
// }
//--------------------------------

// isAllEven,
// let numbers = [2, 4, 5, 8];
// console.log(isAllEven(numbers));
// function isAllEven(numbers) {
//   for (let i = 0; i < numbers.length; i++) {
//     let num = numbers[i];
//     if (num % 2 != 0) {
//       return false;
//     }
//   }
//   return true;
// }
//__________________________________________
//evenAndOdd
// let numbers=[1,2,3,4,5,6]
// console.log(evenAndOdd(numbers));
// function evenAndOdd(numbers) {
//     let evenOdd=[];
//     let even=[];
//     let odd=[];
//     for (let i = 0; i < numbers.length; i++) {
//         let num = numbers[i];
//     if (num % 2 != 0) {
//         odd.push(num)
//     }
//     else {
//         even.push(num)
//     }
//     }
//     evenOdd.push(even,odd);
//     return evenOdd;
// }
//-----------------------------------
// console.log(exponentiate(2, 3));
// function exponentiate(b, p){
//     let exponent=1;
//     for(let i=1;i<=p;i++){
//         exponent= exponent*b;
//     }
//     return exponent;
// }
//------------------------------------------
//let number=11;
// console.log(onlyOdd(11));
// function onlyOdd(number) {
//   let sumOfOdd = 0;
//   for (let i = 1; i <= number; i++) {
//     if (i % 2 === 1) {
//       sumOfOdd += i;
//     }
//   }
//   return sumOfOdd;
// }
//------------------------------------
// curr=10;
//80
// console.log(bacteriaTime(10, 59));
// function bacteriaTime(current, target){
// // let curr=10; // target =120; // time=20 bac=40
// // time=20 bac=80// time=20 bac=160 // time=0  bac 10 // time=20 bac=20

// //keeping the track of time
// let bacTime=0;
// //keeping the total amount of bac
// let totalBac=current; //totalBac=currentBac;
// //codition to chk target is smaller than current
// if(target<current){
//   return "target must be larger than current";
// }
// //condition >=target then break
// //for- if we know the number iteration
// //while loop when condition
// //is given but not sure about iteration
// while (totalBac<=target)
// {
//   bacTime +=20;
//   totalBac +=totalBac;
// }
// return bacTime;
// //if targey is smaller than current then return string;
// }
//--------------------------------------------------------------
// let numbers = [];
// console.log(getAverage(numbers));
// function getAverage(numbers) {
//   //let avg = 0;
//   let sum = 0;
//   if (numbers.length === undefined) {
//     return null;
//   } else {
//     for (let i = 0; i < numbers.length; i++) {
//       sum += numbers[i];
//     }
//     // avg = ;
//   }
//   return sum / numbers.length;
// }
//------------------------------
// console.log(countCoins(["Q", "Q", "D", "N", "N", "P", "Q"]));
// function countCoins(coins) {
//     let count=0;
//     for( let i=0;i<coins.length;i++){
//         if(coins[i]==='P')
//             count +=1;
//         else if(coins[i]==='N'){
//             count +=5;
//         }
//         else if(coins[i]==='D')
//         count +=10;
//         else if(coins[i]==='Q')
//         count +=25;
//     }
//     return count;
// }
//-----------------------------------
// console.log(getPairs(4));
// function getPairs(number) {
//     let pair=[];
//     for( let i=1;i<=number;i++){
//         for( let j=i;j<=number;j++){
//             pair.push([i,j]);
//         }
//     }
//     return pair;
// }

//-------------Test-------------
// console.log(exclaim("string"));
// function exclaim(string) {
//   return string + "!";
// }

//----------------------------------

//console.log(getMostVowels("I am a keeper with some real rhythms"));
// console.log(getMostVowels("try my gym"));

// function getMostVowels(string) {
//   let word = "";
//   let currMaxWord = "" + `""`;
//   let currMaxCount = 0;
//   let words = string.split(" ");
//console.log(words)
// for (let i = 0; i < words.length; i++) {
//   word = words[i];
//console.log("Word is :== "+word)
//console.log("main word is: "+words[i])
// let c=mostVowels(words[i]);
// console.log("returned value :"+c)
//     if (currMaxCount < mostVowels(words[i])) {
//       //console.log("Current Max: "+currMaxWord)
//       currMaxCount = mostVowels(words[i]);
//       currMaxWord = word;
//     }
//   }
//   return currMaxWord;
// }
//console.log(mostVowels("keeper"));
// function mostVowels(word) {
//   console.log("Word is most vowels  :" + word);
//   let count = 0;
//   vowels = "aeiouAEIOU";
//   for (let i = 0; i < word.length; i++) {
//     let char = word[i];
//     if (vowels.includes(char)) {
//       //console.log("Char :"+char)
//       count += 1;
//     }
//   }
//   return count;
// }
//-----------------------------------------------
// console.log(createMultiplicationTable(3, 5))
// function createMultiplicationTable(rows, cols){
//   /*[[1,2,3,4,5],
//     [2,4,6,8,10],
//     [3,6,9,12,15]] */

//     let arr=[];
//     let small="";
//     for(let i=1;i<=rows;i++){
//         for(let j=1;j<=cols;j++){

//             small +=([i*j]);
//         }
//         small +=" "
//     }
//     return small;
//     //return arr;
// }

//-----------------------------------------
// console.log(getMostVowels("I am a keeper with some real rhythms"));
// function getMostVowels(string) {
//   let word = "";
//   let words = string.split(" ");
//   console.log(words);
//   console.log(string[4]);
//   for (let i = 0; i < string.length; i++) {
//     let word = string[i];
//     //console.log("Words are :"+words[i])
//   }
//   //return
// }
/*

/* Write your code here! */
// function exclaim(string) {
//   return string + "!";
// }
// getAreaOfTrapezoid,

// this may not pass one of the case in test
// but if you run node you will get all the results.
// console.log(getAreaOfTrapezoid('a', 'b', 'c'));
// function getAreaOfTrapezoid(a, b, h) {
//   let area = 0;
//   if (a < 0 || b < 0 || h < 0) {
//     return "error";
//   } else if (
//     Number.isInteger(a) &&
//     Number.isInteger(b) &&
//     Number.isInteger(h)
//   ) {
//     area = ((a + b )/ 2) * h;
//   } else {
//     return "error";
//   }
//   return area;
// }
// // isStringTooLong,
// function isStringTooLong(string) {
//   if (string.length >= 26) {
//     return true;
//   }
//   return false;
// }
// // alternateCaps,
// console.log(alternateCaps("Poestaysposthaste"));
// function alternateCaps(string) {
//   let newStr = "";
//   for (let i = 0; i < string.length; i++) {
//     let char = "";
//     if (i === 0) {
//       char = string[i].toLowerCase();
//     } else {
//       char = string[i];
//       if (i % 2 != 0) {
//         newStr += char.toUpperCase();
//       } else {
//         newStr += char;
//       }
//     }
//   }
//   return newStr;
// }
// // reverse,
// function reverse(array) {
//   let newArr = [];
//   for (let i = array.length - 1; i >= 0; i--) {
//     let ele = array[i];
//     newArr.push(ele);
//   }
//   return newArr;
// }
// // getMostVowels,
//________________________

console.log(alternateCaps("k"));
function alternateCaps(string) {
  let newStr = "";
  if (string.length < 1) {
    return newStr;
  }
  if (typeof string === "string") {
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (i % 2 === 1) {
        newStr += char.toUpperCase();
      } else {
        newStr += char.toLowerCase();
      }
    }
  } else {
    return "error";
  }
  return newStr;
}
//______________________________________
/*  4) builds the correct 8x6 table
      5) builds the correct 6x3 table
      6) builds the correct 4x10 table */
// console.log(createMultiplicationTable(8, 6));
// function createMultiplicationTable(rows, cols) {
//   let arr = [];

//   let final = [];
//   if (rows === 0 || cols === 0) {
//     return arr;
//   } else if (Number.isInteger(rows) && Number.isInteger(cols)) {
//     for (let i = 1; i <= rows; i++) {
//       let small = [];
//       for (let j = 1; j <= cols; j++) {
//         small.push(i * j);
//         //small
//       }

//       arr.push(small); // small.push([])
//     }
//   } else {
//     return "error";
//   }
//   // final=arr.map(Number)
//   return arr;
// }
// console.log(alternateCaps("pOestaysposthaste"));
// function alternateCaps(string) {
//   console.log("origona length--: " + string.length);
//   let newStr = "";
//   if (typeof string === "string") {
//     for (let i = 0; i < string.length; i++) {
//       let char = string[i];
//       if (i % 2 === 1) {
//         newStr += char.toUpperCase();
//       } else {
//         newStr += char.toLowerCase();
//       }
//     }
//   } else {
//     return "error";
//   }
//   console.log("newString length--: " + newStr.length);
//   return newStr;
// }
