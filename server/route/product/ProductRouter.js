const express = require("express");
const {
  AllProductsController,
  FilterProductController,
  InventoryDetails,
} = require("../../controllers/product/ProductController");

const ProductRouter = express.Router();

ProductRouter.get("/inventory-detail", InventoryDetails);
ProductRouter.get("/all-products", AllProductsController);
ProductRouter.get("/some-products", FilterProductController);

module.exports = ProductRouter;
