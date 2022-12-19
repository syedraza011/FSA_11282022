//alert("hello");
let x=10.6;
console.log(x);
const ream = {
    color: "pink",
    weight: 110,
    size: "A3",
    getDetails: function () {
      return `${this.size}, ${this.weight}lb, ${this.color}, 500/ream`;
    },
  };

  console.log(ream.weight)
  console.log(ream["weight"])
 // model c  
  function createReam(color, weight, size) {
    return {
      color: color,
      weight: weight,
      size: size,
      getDetails: function () {
        return `${this.size}, ${this.weight}lb, ${this.color}, 500/ream`;
      },
    };
  }
  
  const ream1 = createReam("white", 150, "A5");
  const ream2 = createReam("beige", 80, "A10");
  
  