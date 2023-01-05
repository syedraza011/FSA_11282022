//alert("hello");
// import/export
// import { useVal1 } from "new.js";

// console.log(useVal1("hello world"));

// // Scope: the area of code where you can access variable X would be considered "in the scope of X"

// // const val1 = 'first variable';
// // console.log(val1);

// // if(typeof val1 === 'string') {
// //     const val2 = 'second variable';
// //     console.log(val1);

// //     {
// //         console.log(val2);
// //     }
// //     // console.log(`${val1} is a string`);
// // }

// // function exampleFunction() {
// //     const val3 = 'third variable';
// //     let val5 = 'variable 5';

// //     if(true) {
// //         {
// //             const val4 = 'fourth variable';
// //             val5 = 'the latest one';
// //         }
// //         // console.log(val4);
// //     }

// //     return val5;
// // }
// // console.log(val3);
// // console.log(exampleFunction());
// // console.log(window);

// // Factory Functions
// // use the "this" keyword
// // returns objects (or technically any other data)
// function createUser(username, email, emailOptIn) {
//   return {
//     username: username,
//     email: email,
//     emailOptIn: emailOptIn,
//     sendEmail: function () {
//       if (emailOptIn !== true) {
//         return `Email DID NOT send: ${this.username} is not opted in!`;
//       } else {
//         return `Email to ${this.username} DID send!`;
//       }
//     },
//   };
// }
// // const userFF1 = createUser('keiran', 'kk@fullstackacademy.com', true);
// // console.log(userFF1);

// function UserConstructor(username, email, emailOptIn) {
//   console.log("1", this);
//   this.username = username;
//   console.log("2", this);
//   this.email = email;
//   console.log("3", this);
//   this.emailOptIn = emailOptIn;
//   console.log("final this", this);
//   // implicitly returns an object (this)
// }

// UserConstructor.prototype.newFunction = function () {
//   return true;
// };

// const userConstructor1 = new UserConstructor(
//   "keiran",
//   "kk@fullstackacademy.com",
//   true
// );
// console.log("output", userConstructor1);

// // Classes
// // class vs prototype/constructor: syntactical sugar
// // CLASSES IN JS ARE PROTOTYPES WITH A PAINT JOB

// const arr = [
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
//   { username: "keiran", email: "email@gmail.com", emailOptIn: true },
// ];

// class UserClass {
//   constructor(username, email, emailOptIn) {
//     this.username = username;
//     this.email = email;
//     this.emailOptIn = emailOptIn;
//   }

//   newFunction(arr) {
//     console.log(arr);
//     return `${this.username}, ${this.email}`;
//   }
// }
// // const userClass1 = new UserClass('keiran', 'kk@fullstackacademy.com', true);
// // const userClass2 = new UserClass('luke', 'luke@fullstackacademy.com', false);
// // console.log('output', userClass1);
// // console.log('function', userClass1.newFunction());
// // console.log('output', userClass2);
// // console.log('function', userClass2.newFunction(arr));

// // for(let i = 0; i < arr.length; i++) {
// //     const user1 = new UserClass(arr[i].username, arr[i].email, arr[i].emailOptIn);
// //     const user2 = new UserClass(arr[i]);
// // }

// // Inheritance for classes
// // super - gets the property keys/values from the parent class
// // extends - gets the methods from the parent class
// class AdminClass extends UserClass {
//   constructor(username, email, emailOptIn, level) {
//     super(username, email, emailOptIn);
//     this.level = level;
//   }

//   adminFunction() {
//     return `I did a thing!`;
//   }

//   newFunction() {
//     return `${this.username}, ${this.email}`;
//   }
// }
// const admin1 = new AdminClass("username", null, true, 1);
// console.log(admin1);

//recurssion
const fabonacci = (num) => {
  if (num <= 0) return 0;
  if (num === 1) return 1;
  return fabonacci(num - 2) + fabonacci(num - 1);
};
console.log(fabonacci(10));
//HOF/ CB
const calculator = (num1, num2, cb) => {
  return cb(num1, num2);
};
const add = (num1, num2) => {
  return num1 + num2;
};
const sub = (num1, num2) => {
  return num1 - num2;
};
const mul = (num1, num2) => {
  return num1 * num2;
};
const div = (num1, num2) => {
  return num1 / num2;
};
console.log(calculator(1, 2, add));
console.log(calculator(1, 2, sub));
console.log(calculator(1, 2, mul));
console.log(calculator(1, 2, div));

//using built-In
const arr = [
  {
    id: 1,
    first_name: "Glenn",
    last_name: "Tatlowe",
    email: "gtatlowe0@bing.com",
    gender: "Bigender",
  },
  {
    id: 2,
    first_name: "Julio",
    last_name: "Leyban",
    email: "jleyban1@skyrock.com",
    gender: "Male",
  },
  {
    id: 3,
    first_name: "Roselia",
    last_name: "Duxbarry",
    email: "rduxbarry2@webnode.com",
    gender: "Female",
  },
  {
    id: 4,
    first_name: "Hedvige",
    last_name: "De Gregoli",
    email: "hdegregoli3@jugem.jp",
    gender: "Female",
  },
  {
    id: 5,
    first_name: "Jean",
    last_name: "Yellep",
    email: "jyellep4@cdc.gov",
    gender: "Female",
  },
  {
    id: 6,
    first_name: "April",
    last_name: "Weatherhead",
    email: "aweatherhead5@opensource.org",
    gender: "Female",
  },
  {
    id: 7,
    first_name: "Arabel",
    last_name: "Davy",
    email: "adavy6@phoca.cz",
    gender: "Female",
  },
  {
    id: 8,
    first_name: "Cassi",
    last_name: "Jinkins",
    email: "cjinkins7@npr.org",
    gender: "Female",
  },
  {
    id: 9,
    first_name: "Coralyn",
    last_name: "Penelli",
    email: "cpenelli8@columbia.edu",
    gender: "Female",
  },
  {
    id: 10,
    first_name: "Jayson",
    last_name: "Schwandner",
    email: "jschwandner9@ocn.ne.jp",
    gender: "Male",
  },
];
