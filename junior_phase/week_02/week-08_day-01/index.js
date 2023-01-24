// alert("hello");

//npm install express
const express = require("express");
const app = express();
const things=["stuff","cats","birds"];
app.get("/", (req, res) => {
  res.send("<h1> Hello world</h1>");
});

app.get("/things", (req, res) => {
    res.send(things);
  });
  app.get("/things/:id", (req, res) => {
    res.send(things[req.params.id]);
  });

  app.listen(3000);