const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    headphone_type: {
      type: [String],
      required: true,
    },
    company: {
      type: [String],
      required: true,
    },
    colour: {
      type: [String],
      required: true,
    },
    price_range: [
      {
        type: [Number],
        required: true,
      },
    ],
  },
  { collection: "inventory-data" }
);

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
