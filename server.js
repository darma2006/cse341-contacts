require("dotenv").config();

const express = require("express");

const mongodb = require("./data/database");

const routes = require("./routes");

const app = express();

const port = process.env.PORT || 8080;

app.use("/", routes);

app.get("/", (req, res) => {
  res.send("Contacts API is running!");
});

mongodb
  .initDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });