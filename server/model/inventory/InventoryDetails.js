const mongoose = require("mongoose");

const InventorySchema = new mongoose.Schema(
  {
    filter_name: {
      type: String,
      required: true,
    },
    headphone_type: {
      type: [String],
      default: undefined,
    },
    company: {
      type: [String],
      default: undefined,
    },
    colour: {
      type: [String],
      default: undefined,
    },
    price_range: {
      type: [String],
      default: undefined,
    },
  },
  { collection: "inventory-data" }
);

const Inventory = mongoose.model("Inventory", InventorySchema);
module.exports = Inventory;
