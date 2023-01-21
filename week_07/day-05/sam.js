/* eslint-disable no-alert */

/**************
 *   SLICE 1
 **************/

function updateCoffeeView(coffeeQty) {
  let coffee_counter = document.getElementById("coffee_counter");

  coffee_counter.innerText = coffeeQty;
}
updateCoffeeView(50);
function clickCoffee(data) {
  let coffee = data.coffee;
  data.coffee++;
  const coffee_counter = document.querySelector("#coffee_counter");

  coffee_counter.innerText = data.coffee;
}

// clickCoffee(data)
/**************
 *   SLICE 2
 **************/

function unlockProducers(producers, coffeeCount) {
  for (let i = 0; i < producers.length; i++) {
    let obj = producers[i];
    if (coffeeCount >= obj.price / 2) {
      obj.unlocked = true;
    }
  }
}

function getUnlockedProducers(data) {
  let newArr = [];
  let producer = data.producers;
  for (let i = 0; i < producer.length; i++) {
    let obj = producer[i];
    if (obj.unlocked === false) {
      newArr.push(obj);
    }
  }
  return newArr;
}

function makeDisplayNameFromId(id) {
  let newStr = id
    .replace(/(^\w)/g, (g) => g[0].toUpperCase())
    .replace(/([-_]\w)/g, (g) => " " + g[1].toUpperCase())
    .trim();

  return newStr;
}

// You shouldn't need to edit this function-- its tests should pass once you've written makeDisplayNameFromId
function makeProducerDiv(producer) {
  const containerDiv = document.createElement("div");
  containerDiv.className = "producer";
  const displayName = makeDisplayNameFromId(producer.id);
  const currentCost = producer.price;
  const html = `
    <div class="producer-column">
      <div class="producer-title">${displayName}</div>
      <button type="button" id="buy_${producer.id}">Buy</button>
    </div>
    <div class="producer-column">
      <div>Quantity: ${producer.qty}</div>
      <div>Coffee/second: ${producer.cps}</div>
      <div>Cost: ${currentCost} coffee</div>
    </div>
    `;
  containerDiv.innerHTML = html;
  return containerDiv;
}

function deleteAllChildNodes(parent) {
  let parent = document.getElementById("parent");
  parent.removeChild();
}
console.log(parent);
function renderProducers(data) {
  // your code here
  //first indentify conotainer coffee producers
  //access unlock producers array
  // call the fucntion to unlock
  //firt unlock producer
  //grab unlocked one to push
  //
}

/**************
 *   SLICE 3
 **************/

function getProducerById(data, producerId) {
  let producers = data.producers;
  for (let i = 0; i < producers.length; i++) {
    let obj = producers[i];
    if (obj.id === producerId) {
      return obj;
    }
  }
}

function canAffordProducer(data, producerId) {
  if (data.id === producerId) {
  }
}
// console.log(data,producerId);
function updateCPSView(cps) {
  // your code here
  let coffee_counter = document.getElementById("coffee_counter");

  coffee_counter.innerText = coffeeQty;
}

function updatePrice(oldPrice) {}

function attemptToBuyProducer(data, producerId) {
  // your code here
}

function buyButtonClick(event, data) {
  // your code here
}

function tick(data) {
  // your code here
}

/*************************
 *  Start your engines!
 *************************/

// You don't need to edit any of the code below
// But it is worth reading so you know what it does!

// So far we've just defined some functions; we haven't actually
// called any of them. Now it's time to get things moving.

// We'll begin with a check to see if we're in a web browser; if we're just running this code in node for purposes of testing, we don't want to 'start the engines'.

// How does this check work? Node gives us access to a global variable /// called `process`, but this variable is undefined in the browser. So,
// we can see if we're in node by checking to see if `process` exists.
if (typeof process === "undefined") {
  // Get starting data from the window object
  // (This comes from data.js)
  const data = window.data;

  // Add an event listener to the giant coffee emoji
  const bigCoffee = document.getElementById("big_coffee");
  bigCoffee.addEventListener("click", () => clickCoffee(data));

  // Add an event listener to the container that holds all of the producers
  // Pass in the browser event and our data object to the event listener
  const producerContainer = document.getElementById("producer_container");
  producerContainer.addEventListener("click", (event) => {
    buyButtonClick(event, data);
  });

  // Call the tick function passing in the data object once per second
  setInterval(() => tick(data), 1000);
}
// Meanwhile, if we aren't in a browser and are instead in node
// we'll need to exports the code written here so we can import and
// Don't worry if it's not clear exactly what's going on here;
// We just need this to run the tests in Mocha.
else if (process) {
  module.exports = {
    updateCoffeeView,
    clickCoffee,
    unlockProducers,
    getUnlockedProducers,
    makeDisplayNameFromId,
    makeProducerDiv,
    deleteAllChildNodes,
    renderProducers,
    updateCPSView,
    getProducerById,
    canAffordProducer,
    updatePrice,
    attemptToBuyProducer,
    buyButtonClick,
    tick,
  };
}
