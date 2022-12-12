// //2D
// // 2D arrays
// const animalArr = [
//   ["name", "Lilly"],
//   ["species", "Canis lupus familiaris"],
//   ["age", 5],
//   ["favToys", ["red ball", "dino plushie", "Kong bone"]],
// ];

// // console.log(animalArr[0][1]);
// // target animalArr => use the variable name
// // to get to the correct index, count from 0
// // narrow scope to the index value array, find the 1st index of that
// // narrow scope to the final array, find the correct index
// // console.log(animalArr[3][1][1]);
// // console.log(animalArr[3][1][1][3]);

// // OBJECTS
// // JSON: JavaScript Object Notation
// // new data type: biggest point to remember is key-value pairs
// const animalObj = {
//   name: "Lilly",
//   species: "Canis lupus familiaris",
//   age: 5,
//   favToys: ["red ball", "dino plushie", "Kong bone"],
// };

// how to access a key-value pair on an obj
// console.log(animalObj["name"]);
// console.log(animalObj["favToys"][2]);

// JSON.stringify()
// // turns a JSON obj into a JSON string
// let stringifyVal = JSON.stringify(animalObj);
// console.log(stringifyVal);

// // JSON.parse()
// // turns a JSON string into a JSON obj
// let parsedVal = JSON.parse(stringifyVal);
// console.log(parsedVal);
// :raised_hands:
// 1

// white_check_mark
// eyes
// raised_hands

// 12:37
// Here's the worksheet y'all: https://fullstack.instructure.com/courses/386/discussion_topics/876?module_item_id=144519
// 12:37
// We'll be doing the TDD after lunch

// INTERMEDIATE OBJS
const animalObj = {
    "name": "Lilly",
    "species": "Canis lupus familiaris",
    "age": 5, 
    "favToys": [
        "red ball",
        "dino plushie",
        "Kong bone"
    ]
};

const nonJSONanimal = {
    name: "Lilly",
    species: "Canis lupus familiaris",
    age: 5, 
    favToys: [
        "red ball",
        "dino plushie",
        "Kong bone"
    ]
}

// how to update a key on an obj
// console.log(animalObj["name"]);
// console.log(nonJSONanimal.name);

nonJSONanimal.species = 'dog';

nonJSONanimal.binomial = "Canis lupus familiaris";

// delete nonJSONanimal.favToys;
nonJSONanimal.favToys = null;

// console.log(nonJSONanimal);

// if(nonJSONanimal.name === 'Lilly') {
//     console.log('it is Lilly');
// }

// for in loops
// a loop we can use on objects to go through the keys
for(let key in animalObj) {
    console.log(`This object's ${key} is ${animalObj[key]}.`);
}
const weather = {
  latitude: 40.75,
  longitude: -74,
  elevation: 27,
  temperature: 23.4,
};
if ("elevation" in weather) {
  console.log(`The elevation is ${weather.elevation}`);
} else {
  console.log("Elevation not available.");
}
