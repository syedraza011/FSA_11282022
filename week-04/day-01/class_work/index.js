//alert("hello");
let btn = document.body.querySelector(".btn");
let grandparent = document.body.querySelector(".grandParent");
let parent = document.body.querySelector(".grandParent");
console.log(parent);
let children = document.querySelectorAll(".child");

console.log(children);
btn.addEventListener("click", function () {
  for (let i = 0; i < children.length; i++) {
    let child = parent.children[2];
    console.log(child[0]);
  }
  removeColor(child[0]);
});

function changeColor(container) {
  container.style.backgroundColor = "Green";
}
function removeColor(item) {
  item.style.backgroundColor = "gray";
}
