//alert("hello");
let btn_01 = document.body.querySelector(".btn_01");
let grandparent = document.body.querySelector(".grandParent");

let parents = document.body.querySelectorAll(".parent");
console.log(parents);
//let children = document.querySelectorAll(".");
let child = parents[0].children;
console.log(child);
function changeColor(container) {
  parents.forEach((parent) => (parent.style.background = "blue"));
  console.log("Hello");
}
function removeColor(item) {
  item.style.backgroundColor = "gray";
}
btn_01.addEventListener("click", function () {
  //console.log(child[i]);
  changeColor(parents.ch);
  // removeColor(child[0]);
});

function allAppend(variable) {
  variable.appendChild();
}
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
