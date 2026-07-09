const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger.json");

require("dotenv").config();

const express = require("express");

const mongodb = require("./data/database");

const routes = require("./routes");

const app = express();

app.use(express.json());

app.use("/", routes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


const port = process.env.PORT || 8080;



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