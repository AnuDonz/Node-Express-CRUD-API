const Product = require("../models/product.model.js");

const getAllProducts = async (req, res) => {// View all Products

  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProductById = async (req, res) => {// View Products by Product ID

  try {
    const { id } = req.params; //Get the product id from the url
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addNewProduct = async (req, res) => {//Create new products
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProduct = async (req, res) => {// Delete product

  try {
    const { id } = req.params;
    const deleteProduct = await Product.findByIdAndDelete(id);

    if (!deleteProduct) {
      return res.status(404).json({ message: "Product not found.." });
    }
    res.status(200).json({ message: "Product has been deleted sucessfully.." });
  } catch (error) {
    req.status(500).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {//Update a product

  try {
    const { id } = req.params; //Get the product id from the url
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product Not Found.." });
    }

    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {// Export API controller methods
  getAllProducts,
  getProductById,
  addNewProduct,
  updateProduct,
  deleteProduct,
};
