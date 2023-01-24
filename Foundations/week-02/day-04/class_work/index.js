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
console.log(getPairs(4));
function getPairs(number) {
    let pair=[];
    for( let i=1;i<=number;i++){
        for( let j=i;j<=number;j++){
            pair.push([i,j]);
        }
    }
    return pair;
}