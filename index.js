const express = require("express");
const mongoose = require("mongoose");
//const Product = require("./models/product.model.js");//Import the Product model
const app = express();
const productRout = require("./routes/product.route.js");

//middlwares
app.use(express.json()); //Allow to pass json data with the requests
app.use(express.urlencoded({ extended: false })); //Allow to pass data with the form urls

//Routes
app.use("/api/Products", productRout);

app.get("/", (req, res) => {
  res.send("Hello From Node API");
});

mongoose
  .connect(
    "mongodb+srv://anusandaruwan7:8gjx8AEgZ3zmNgVX@cruddb.ttmrbme.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CRUDDB"
  )
  .then(() => {
    console.log("Connected to the database");

    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(`Connection Failed ${error.message}`);
  });
