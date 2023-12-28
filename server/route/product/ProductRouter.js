const express = require("express");
const {
  ProductDetailController,
  FilterProductController,
  InventoryDetails,
} = require("../../controllers/product/ProductController");

const ProductRouter = express.Router();

ProductRouter.get("/inventory-detail", InventoryDetails);
ProductRouter.get("/product-detail/:id", ProductDetailController);
ProductRouter.get("/some-products", FilterProductController);

module.exports = ProductRouter;
