const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    product_name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },
    availability: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
  },
  { collection: "product-data" }
);

const ProductData = mongoose.model("Product", ProductSchema);
module.exports = ProductData;
