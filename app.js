const express = require("express");
const db = require("./server/models");
const categories = require("./routes/categories.route");
const meals = require("./routes/meals.route");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//// localhost:port/categories
app.use("/categories", categories);

//// localhost:port/meals
app.use("/meals", meals);

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

module.exports = app;
