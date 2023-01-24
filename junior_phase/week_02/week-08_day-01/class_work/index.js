// alert("hello");

//npm install express
const express = require("express");
const app = express();
const animals = ["kitten", "dog", "horse"];
app.get("/", (req, res) => {
  res.send(`
    <html>
     <head>
       <title>My site</title>
     </head>
     <body>
       <h1>Hello World</h1>
     </body>
    </html>
  `);
});
// app.get("/", (req, res) => {
//   res.send("<h1> Hello world</h1>");
// });

app.get("/animals", (req, res) => {
    res.send(animals);
  });
  app.get("/animals/:id", (req, res) => {
    res.send(animals[req.params.id]);
  });

app.listen(3000);
