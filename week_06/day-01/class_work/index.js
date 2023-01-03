// //alert("hello");
// let btn_01 = document.body.querySelector(".btn_01");
// let grandparent = document.body.querySelector(".grandParent");

// let parents = document.body.querySelectorAll(".parent");
// console.log(parents);
// //let children = document.querySelectorAll(".");
// let child = parents[0].children;
// console.log(child);
// function changeColor(container) {
//   parents.forEach((parent) => (parent.style.background = "blue"));
//   console.log("Hello");
// }
// function removeColor(item) {
//   item.style.backgroundColor = "gray";
// }
// btn_01.addEventListener("click", function () {
//   //console.log(child[i]);
//   changeColor(parents.ch);
//   // removeColor(child[0]);
// });

// function allAppend(variable) {
//   variable.appendChild();
// }
// const stuffEle = document.body.querySelector(".stuff");
// const building = {
//   height: "5'",
//   room: "3",
//   size: "toddler",
//   capacity: "5",
// };

// class Building {
//   constructor(owner) {
//     this.owner = owner + "'s House";
//   }
//   writeowner() {
//     return this.owner + "'s House";
//   }
//   areTheyCoolowner(check) {
//     if (check) {
//       return this.owner + "is a cool Owner";
//     } else {
//       return this.owner + "is a lame owner";
//     }
//   }
// } //buiding ending
// class class_rooms extends Building {
//   constructor(owner, num) {
//     super(owner);

//     this.classRooms = num;
//   }
//   print_rooms() {
//     return this.owner + "'s Building has " + this.classRooms + "classrooms";
//   }
//   get rooms (){
//     return this.class_rooms
//   }
//   set rooms(x){
//     this.classrooms=x;
//   }
// }
// //prototype function
// class_rooms.prototype.addClassroom= function(x){
//   this.class_rooms=this.class_rooms+x;
// }
// const newBuilding = new Building("davon");

// const newBuildingTwo = new Building("Raza", 45);
// //usses class room setter
// newBuildingTwo.addClassroom(10);
// newBuildingTwo.rooms=newBuildingTwo.classrooms+5;
// stuffEle.innerHTML = newBuildingTwo.print_rooms();
const fnA = () => {
  return "A" + fnB();
};

const fnB = () => {
  return "B" + fnC();
};

const fnC = () => {
  return "C";
};

console.log(fnA());

const factorial = (n) => {
  // Base Case
  if (n <= 1) {
    return 1;
  }
  // Recursive Case
  else {
    return n * factorial(n - 1);
  }
};

console.log(factorial(0)); // => 6

const adder = (x) => (y) => x + y+8;
const mutliplier = (x) => (y) => x*y;
// Here is the same function written without arrow syntax
function otherAdder(x) {
  return function (y) {
    return x + y;
  };
}

const add2 = adder(2);
// console.log(add2);
const add4 = adder(4);
// console.log(add2);
const num1 = add2(5); // What will num1 be?
//console.log(num1);
const num2 = add4(5); // What will num2 be?
console.log(num1);
const mult=mutliplier(3)
const multi=mutliplier(4)
console.log(mult);

const reverseString = (s) => {
  let str = "";
  for (let i = s.length - 1; i >= 0; i--) {
    
    str += s[i];
  }
  return str;
};
console.log(reverseString("abcd"));


const sumArray = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    console.log(sum)
  }
  return sum;
};
console.log(sumArray[10,5,5,15]);