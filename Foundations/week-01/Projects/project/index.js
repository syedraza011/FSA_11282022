// //alert("hello")
// const squares = document.querySelectorAll(".square");
// const mole = document.querySelector(".mole");
// const timeLefy = document.querySelector("#time-left");
// const score = document.querySelector("#score");
// let result = 0;
// let curreentTime = 60;
// let hitPosition=0;
// function randomSquare() {
//   squares.forEach((square) => {
//     square.classList.remove("mole");
//   });
//   let target=Math.floor(Math.random() * 9);
//   let randomPosition = squares[target];
//   randomSquare.appendChild(randomPosition);
//   hitPosition = randomSquare.id;
// } // randomSquare();
// squares.forEach((square) => {
//   square.addEventListener("mousedown", () => {
//     if (square.id === hitPosition) {
//       result++;
//       square.textContent = result;
//       hitPosition = null;
//     }
//   });
// });
// function moveMole() {
//   let timerId = null;
//   timerId = setInterval(randomSquare, 500);
// }
// // randomSquare();
// // moveMole();
// function countDown() {
//   curreentTime--;
//   timeLeft.textContent = curreentTime;
// }
// let countDownTimerId = setInterval(randomSquare, 500);

// Odd Couple
// Define a function, oddCouple, that accepts an array of numbers as an argument.
// oddCouple should return a new array with the first two odd numbers from the original array:
// oddCouple([1, 2, 3, 4, 5]); // => [1, 3]
// If fewer than two odd numbers exist in the original array, return an array with only the one odd number,
//or an empty array if there are no odd numbers:
// oddCouple([10, 15, 20]); // => [15]
// oddCouple(2, 4, 6, 8); // => []

console.log(oddCouple([1, 2, 3, 4, 5]));
function oddCouple(arr) {
  let newArr = [];
  if(arr.length<1){
    return newArr;
  }
  
  for (let i = 0; i < arr.length; i++) {
    let ele = arr[i];
    
      if (ele % 2 === 1) {
     
          newArr.push(ele);
        }
        if(newArr.length ===2){
          return newArr;
      }
  }
  return newArr;
}
