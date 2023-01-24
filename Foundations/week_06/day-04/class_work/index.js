// // // alert("hello");

// // let flag= document.getElementById('.sub').addEventListener("click", function() {
// //    clicked = true

// // });

// // if(clicked){
// //     // <input id="comitted" >Hello</input>
// // }
// // let container = document.querySelector(".sub");
// // console.log(container);
// // const commit_Btn = document.querySelector(".btn");
// // console.log(commit_Btn);
// // let input = document.querySelector("#input");
// // console.log(input);
// // commit_Btn.addEventListener("click", function (event) {
// //   event.preventDefault();

// //   container.appendChild(input);
// // // });
// // let author_header = "";
// // let btn = document.querySelector("#butn");
// // let x = document.getElementById("author");
// // btn.addEventListener("click", function (e) {
// // e.preventDefault()
// //   //classList.add name if clicked
// //   //class of hidden
// //   //in css display none  by difault
// //   // clicking event listner , classlist.remove from auhtor
// //   //
// //   author_header = x.value;
// //   console.log(author_header);
// //   return author;
// // });
// // const body=document.querySelector("body");
// // const container = document.createElement("div");
// // body.append(container);
// // // console.log(x.);

// // const author = document.createElement("h3");
// // console.log(author_header);
// // container.append(author);

// // author.innerText = author_header;
// // console.log(author)

// // // console.log(author)
// // // container.innerHTML = x.value;
// // // console.log(author.value);

// // // console.log(container);
// // container.append(author_header);
// let clicked = false;
// let flag = document

  
//     // clicked = true;
//     // console.log(clicked);
//     // var submit = document.getElementsByTagName('butn')[0];
//     // submit.onclick = function() {
//     //     alert("Button pressed!");
//     // }
// let btn = document.querySelector("#butn");
// console.log(btn);
// let input = document.querySelector("#author");
// let body = document.querySelector("body");
// let title = document.createElement("div");
// title.setAttribute("id", "divSubmit");
// body.append(title);
// btn.addEventListener("click", function (e) {
//   e.preventDefault();
//   title.innerHTML = input.value;
// });
// // function onButtonClick(){
// //     document.getElementById('textInput').className="show";

// //   }
//   // window.onclick = function(e)
//   //   {   var id =  e.target.id;   
//   //    if (id === 'sent')  
//   //    { var txt = document.getElementById('example').value    
//   //      $( "#para" ).empty().append( txt );
//   //    }
//   //   }
let btn=document.querySelector("#butn");
let input=document.querySelector("#author");
let body=document.querySelector("body");
let title=document.createElement("div");
title.setAttribute("id","divSubmit");
body.append(title);
btn.addEventListener("click",function(e){
e.preventDefault();
title.innerHTML=input.value;
})