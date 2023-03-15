const { updateCPSView } = require("./sam");

let parent = document.getElementById("parent");
console.log(parent);
 while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    function attemptToBuyProducer(data, producerId) {
  
      // - does not modify data in any way if the player tries to buy something they can't afford
  if (canAffordProducer(data, producerId)) {
    // increments the quantity of the producer in question only if the player can afford it

    // - decrements the player's coffee by the *current* price of the producer, but only if the player can afford it
    coffeeQty = data.coffee - getProducerById(data, producerId).price;
    updateCoffeeView(coffeeQty);
    // - updates the price of the producer to 125% of the previous price, rounded down, but only if the player can afford the producer
    let oldPrice = getProducerById(data, producerId).price;
    updatePrice(oldPrice);
    // - updates the total CPS, but only if the player can afford the producer
    let totalCPS = getProducerById(data, producerId).cps;
    updateCPSView(totalCPS);
    return true;
  } else {
    return false;
  }
}
let producerId = "mr._coffee";
attemptToBuyProducer(data, producerId);
function buyButtonClick(event, data) {
  // let
  // console.log(data)
  // console.log(event);
        
      }
      let data=34;
      let id = "coffee";
      attemptToBuyProducer(data, producerId)



      The buyButtonClick function
    //   10) mutates the data only if the player can afford the producer
    //   11) shows an alert box with the message "Not enough coffee!" only if the player cannot afford the producer
    //   12) does not modify data or show an alert box if the event passed in doesn't represent a click on a button element
    //   13) renders the updated producers when a purchase succeeds
    //   14) updates the coffee count on the DOM, reflecting that coffee has been spent, when a purchase succeeds
    //   15) updates the total CPS on the DOM, reflecting that the new producer's CPS has been added
    // The tick function
    //   16) increases coffee count by the total CPS
    //   17) updates the DOM to reflect this new coffee count
    //   18) updates the DOM to reflect any newly unlocked producers