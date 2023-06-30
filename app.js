const hbs = require("hbs");
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

//middleware
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

app.use(express.static("public"));
const options = {
  name: "Ander Rivero",
  title: "Curso de node",
};
app.get("/", (req, res) => {
  res.render("home", options);
});
app.get("/elements", (req, res) => {
  res.render("elements", options);
});
app.get("/generic", (req, res) => {
  res.render("generic", options);
});

app.listen(port, () => {
  console.log(`escuchando el puerto ${port}`);
});
