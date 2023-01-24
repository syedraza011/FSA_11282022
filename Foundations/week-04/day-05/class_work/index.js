alert("hello");
// let x=10.6;
// console.log(x);
// const ream = {ws
//     color: "pink",
//     weight: 110,
//     size: "A3",
//     getDetails: function () {
//       return `${this.size}, ${this.weight}lb, ${this.color}, 500/ream`;
//     },
//   };

//   console.log(ream.weight)
//   console.log(ream["weight"])
//  // model c
//   function createReam(color, weight, size) {
//     return {
//       color: color,
//       weight: weight,
//       size: size,
//       getDetails: function () {
//         return `${this.size}, ${this.weight}lb, ${this.color}, 500/ream`;
//       },
//     };
//   }

//   const ream1 = createReam("white", 150, "A5");
//   const ream2 = createReam("beige", 80, "A10");
//   console.log(ream1.color)

let x = 5;
const foo = 10;

function add(x, y) {
  const bar = 1;
  y = 3;
  return x + y + foo + bar;
}

function multiply(x, y) {
  const bar = 2;
  x = 5; //y=4 * 10,2=400
  return x * y * foo * bar;
}

let y = 8;
console.log(multiply(3, 4));
console.log(add(3, 4));
multiply(3, 4);
console.log(x, y);
console.log(bar);
