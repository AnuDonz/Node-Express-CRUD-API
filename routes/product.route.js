const express = require("express"); // Import express
//const Product = require("./models/product.model.js");//Import the Product model
const router = express.Router(); // create router object
const {
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller.js"); //Import controller API methods

router.get("/", getAllProducts); //Rout for view all product

router.get("/:id", getProductById); //Rout to view a product buy ID

router.post("/", addNewProduct); //Rout to add a new product

router.delete("/:id", deleteProduct); //Rout to delete a product

router.put("/:id", updateProduct); // rout to update a product

module.exports = router;
