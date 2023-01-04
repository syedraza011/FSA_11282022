console.log('Hello!');
const myElement = document.body.querySelector('h1');

// Class based approach
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  prettyPrint() {
    return 'The name of this animal is: ' + this.name;
  }
  speak() {
    return 'Generic animal sounds';
  }
}

const myAnimal = new Animal('Dog', 5);

myElement.innerHTML = myAnimal.name;

// Function factory
function createAnimal(name, age) {
  return {
    name,
    age,
    prettyPrint: function () {
      return 'The name of this animal is: ' + name;
    },
  };
}

const myAnimalTwo = createAnimal("Luke's Dog", 0);

myElement.innerHTML = myAnimalTwo.prettyPrint();

// Dog class
class Dog extends Animal {
  constructor(name, age, hairColor) {
    super(name, age);
    this.hairColor = hairColor;
  }
  speak() {
    return 'Bark bark ' + this.name + ' Age: ' + this.age;
  }
}

const dog = new Dog('Selene', 0);
dog.name = 'Selene 2';

const dog2 = new Dog('George', 10);
const olderDog = new Dog('George', 11);
console.log(dog2 == olderDog);
console.log(dog2.name === olderDog.name);
console.log(dog2.name == olderDog.name);
console.log(new Dog('Selene', 0) === new Dog('Selene', 0));

myElement.innerHTML = dog.speak();
myElement.innerHTML = dog.prettyPrint();
const titleElement = document.body.querySelector('.title');

// forEach is a method that is called on an array and takes a function as an arguement
// It iterates over each element in the array and executes the function for each element.
// It does not return anything

const numbers = [1, 2, 3, 4]
numbers.forEach((number) => {
  console.log(number)
})

// sort
/* is a method that is called on an array and sorts the elements
   in the array in ascending order.
*/
const unsortedNumbers = [4, 1, 2, 3]
console.log('Unsorted numbers: ' + unsortedNumbers)
unsortedNumbers.sort()
console.log('Sorted numbers: ' + unsortedNumbers)

// Sort with a custom function for sorting

const states = ['IllinoisA', 'IllinoisB', 'Indiana', 'Delaware', 'Texas', 'MONTANA']
// Sorting alphabetically
states.sort(function(a, b) {
  if (a < b) {
    // If I wanted to sort reverse alphabetically, I would return 1
    return -1;
  }
  if (a > b) {
    // and -1 here
    return 1
  }
  return 0
})

console.log('Sorted states: ' + states);

// Sorting based on item length
const states2 = ['Illinois', 'IllinoisB', 'Indiana', 'Delaware', 'Texas', 'MONTANA']
states2.sort(function(a, b) {
  if (a.length < b.length) {
    return 1
  }
  if (a.length > b.length) {
    return - 1
  }
  return 0
})
titleElement.innerHTML = states2

// Map
// const stateLengths = states2.map(function(stateName) {
//   return stateName.length
// })
const stateLengths = states2.map((stateName) => stateName.length)
console.log('State name lengths: ' + stateLengths)

// Filter
const listOfNumbers = [1, 2, 3, 4, 5, 6]
const evenNumbers = listOfNumbers.filter(function(number) {
  // If this returns true, include the original element in the returned array
  return number % 2 === 0;
})
console.log('Even Numbers: ' + evenNumbers)
console.log('Length of original array: ' + listOfNumbers.length)
console.log('Length of filtered array: ' + evenNumbers.length)

// Reduce
// Accumulator = initialValue (0 in this example) on the first iteration
// Then accumulator takes the value of the previousValue plus currentValue
const sum = listOfNumbers.reduce(function(accumulator, currentValue) {
  return accumulator + currentValue
}, 0)
console.log('The sum is: ' + sum)





// Reduce with a named function passed instead of anonymous
const myReduceFunction = (accumulator, currentValue) => {
  return accumulator + currentValue
} // Sums values in the array

let initialValue = 100
const sum2 = listOfNumbers.reduce(myReduceFunction, initialValue)
console.log('sum2: ' + sum2)





// How is reduce working with accumulator and currentValue?
// const listOfNumbers = [1, 2, 3, 4, 5, 6]
// 0 + 1
// 1 + 2
// 3 + 3
// 6 + 4
// 10

// Reduce example with strings
const states3 = ['Illinois', 'IllinoisB', 'Indiana', 'Delaware', 'Texas', 'MONTANA']
const states4 = states.reduce(function(accumulator, currentValue) {
  if (accumulator == '') {
    return currentValue
  }
  return accumulator + ' : ' + currentValue
}, '')
console.log(states4)