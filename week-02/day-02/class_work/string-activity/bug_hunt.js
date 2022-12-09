
const caterpillar = "🐛";
const leaf = "🌿";
const emoji = "🌿";
const rock = "🪨";
let forest = "";
for (let i = 0; i < 100; i++){
  if (Math.random() < 0.8 ){ //0.8
    forest += leaf;
  } else {
    forest += rock;
  }
}

console.log(forest);

let numLeaves = 0;
for (const emoji of forest) { // for let key in object //
  if (emoji == leaf) {
    numLeaves += 1;
  }
} //mising

console.log(`There are ${numLeaves} leaves in the forest.`);

if (numLeaves >= 80) {
  console.log("There are enough leaves to eat :");
} else {
  console.log("There are not enough leaves to eat :");
  console.log(`${caterpillar} is hungry...`);
  process.exit();
}

const timerLabel = `${caterpillar} ate all the leaves in`;
console.time(timerLabel);

console.log(`${caterpillar} gets to feast!`);

let leafLog = "";
while (numLeaves > 0) {
  
  leafLog += `${numLeaves}.. `;
   //console.log(numLeaves);
  numLeaves -= 1;
}

console.log(leafLog);
console.log("0! YUM!");

console.timeEnd(timerLabel);
