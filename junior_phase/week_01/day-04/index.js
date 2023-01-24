const items = [
  { id: "first", title: "First article", image: "./first.jpeg" },
  { id: "second", title: "Second article", image: "./second.jpeg" },
  { id: "third", title: "Third article", image: "./third.jpeg" },
];

// body selector
const body = document.querySelector("body");
const section = document.querySelector("section");
const form = document.querySelector("form");
const first = document.querySelector("#first");

// const other = Array.from(document.querySelectorAll('div'));
// console.log(document.querySelectorAll('div'));
// console.log(other);

// need to fill in the divs to create:
{
  /* <div>
    <h3></h3>
    <img />
</div> */
}
console.log(document);

function createCard(obj) {
  const div = document.querySelector(`#${obj.id}`);
  // console.log(div);

  // create elements
  const title = document.createElement("h3");
  const img = document.createElement("img");

  // push the values in
  title.innerHTML = obj.title;

  img.src = obj.image;
  img.alt = obj.title;
  console.log(title);
  console.log(img);

  // add css
  img.style.border = "5px solid red";
  title.style.border = "5px solid green";

  // img {
  //     border: '';
  // }

  // append
  div.append(title);
  div.append(img);
}
// createCard(items[0]);

// if we have to do something several times, probably a loop will help
items.forEach((item) => {
  // console.log(item);
  createCard(item);
});

body.addEventListener("dblclick", () => {
  console.log("Clicked the body!");
});

section.addEventListener("click", () => {
  console.log("Clicked the section!");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Submitted the form!");
  console.log(e);
});
