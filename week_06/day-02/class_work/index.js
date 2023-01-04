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
const.number