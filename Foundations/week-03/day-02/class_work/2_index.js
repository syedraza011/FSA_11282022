// // //Class work
// // console.log("hello");
// // document.body.querySelector(".result").innerHTML=13;
// // //string- "hello world";
// // let num1 = 13;
// // let num2 = 35;

//  let message = prompt("who are you saying Hello : ");
// let concatItem= " Hello " + message;
// // // let num3 = promt("WHat is your Second number: ");
// // // document.body.querySelector(".result").innerHTML=num+num3;
//  //document.body.querySelector("#result").innerHTML=message;
// // // document.body.querySelector(".result").innerHTML=num+num3;
// // document.body.querySelector("#result").innerHTML=2**3;
// // document.body.querySelector("#result").innerHTML=2**3;
// // document.body.querySelector("#result").innerHTML=13%3;
// // document.body.querySelector("#result").innerHTML=15*5;
// if(message==="carlos"){
// console.log("This is Carlos")
// } else {
//     console.log("It is not Calos")
// }

//DOM

let colorMeEle = document.body.querySelector(".colorMe");
let buttonEle = document.body.getElementsByTagName("button");

buttonEle[0].addEventListener("click", function () {
  //console.log("Clicked")
  colorMeEle.innerHTML = "Some text";
  colorMeEle.style.color = "red";
  //colorMeEle.getAttribute
});
let newEle = document.createElement("p");
newEle.innerHTML = "this is a paragraph";
//appending is when you add an aelement to DOM
document.body.appendChild(newEle);
