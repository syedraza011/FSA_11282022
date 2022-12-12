// //Class work
/*

pwd- directory or address
~- means home folder
mkdri fullstack
creating a file write touvh 
how to find in git hwere are you in git
to see hidden ls -al it will show any hidden folders
*/
// function findHerbivores(obj){
//     let animal=[];
//     for(let key in obj){
//         let animal=obj[key];
//         console.log()
//         if(key.isHerbivore){
//             animal.push()
//         }
//     }
// }
// console.log(merge(["math", "history", "physics"], ["B-", "A+", "B+"]))
// function merge(arr1, arr2) {
//     let obj = {};
//     for (let i = 0; i < arr1.length; i++) {
//         let key=arr1[i]
//       obj [key]= arr2[i];
//         //obj+=1;
//     }
//     return obj;
//   }

//------------------
const cart = [
  {
    name: "Blue Paint",
    quantity: 10,
    price: 4.99,
  },
  {
    name: "Red Paint",
    quantity: 5,
    price: 4.99,
  },
  {
    name: "Yellow Paint",
    quantity: 8,
    price: 4.99,
  },
  {
    name: "16x20in Canvas",
    quantity: 2,
    price: 2.99,
  },
  {
    name: "Paintbrush",
    quantity: 15,
    price: 1.5,
  },
];

console.log(checkout(cart));
function checkout(obj) {
  let sum = 0;
  for (let key in obj) {
    console.log(key);
    sum += obj[key].price * obj[key].quantity;
    console.log(obj[key].price);
  }
  return sum;
}
//------------
console.log(analyzeFrequencies("abbca"));
function analyzeFrequencies(string) {
  let obj = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    if (obj[char] > -1) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }
  return obj;
}
