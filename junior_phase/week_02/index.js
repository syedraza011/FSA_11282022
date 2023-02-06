// //alert("hello");
// const arr1 = [2, 7, 4, 6, 7, 4];
// const arr2 = [7, 1, 9, 7, 4, 5];

// function intersection(arr1,arr2){
//     let obj={};
//     let newArr=[];
//     // if(arr1.length<arr2.length){
//         for(let i=0;i<arr1.length;i++){
//             let fNum=arr1[i];
//             for(let j=0;i<arr2.length;j++){
//                 let sNum=arr2[i];
//                 if(fNum===sNum){

//                 newArr.push(fNum);
//                 }
//             }
//         }

//         // }else {
//         //     min=arr2.length;
//         // }
//         // for(let i=0;i<min;i++){
//         //     if(arr1[i]===arr2[i]){
//         //     newArr.push(arr1[i]);
//         //     }
//         // }
//     return newArr;
// }
// console.log(intersection(arr1,arr2));

// let chars = ['A', 'B', 'A', 'C', 'B'];
// let uniqueChars = [...new Set(chars)];

// console.log(uniqueChars);
// let obj={a:1,b:2}
// function invert (obj) {
//     let newObj={}
//     for (let key in obj) {
//         newObj[obj[key]]=key;
//         // let nKey=obj[key]
//         // console.log("new Key ",nKey)
//         //     let nValue=key;
//         //     console.log("new Value ",nValue)
//         //     newObj.nKey=nValue;

//     }
//     return newObj;
//   }
// console.log(invert(obj));

function camelCase(str) {
  str = str.toLowerCase();
  let array = str.split(" ");
  let newArray = array.map((element) => {
    return element.split("_");
  });

  newArray = newArray.flat(Infinity);
  newArray = newArray.filter((element) => {
    if (element) return element;
  });

  // console.log(newArray);
  const finalArray = [];
  for (let i = 0; i < newArray.length; i++) {
    let firstLetter = newArray[i][0];
    // // // console.log(newArray[0][0])
    firstLetter = firstLetter.toUpperCase();
    let restOfWord = newArray[i].substring(1, newArray[i].length);
    // console.log(restOfWord);
    finalArray.push(`${firstLetter}${restOfWord}`);
    finalArray.push();
  }

  console.log(finalArray.join(""));
  return finalArray.join(" ");
}

console.log(camelCase("__hello_world_how_are_you"));
