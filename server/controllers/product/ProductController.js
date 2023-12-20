const ProductData = require("../../model/product/ProductSchema");
const InventoryData = require("../../model/inventory/InventoryDetails");

const InventoryDetails = async (req, res) => {
  try {
    const inventory = await InventoryData.find();
    res.status(200).json({
      Inventory: inventory,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const AllProductsController = async (req, res) => {
  try {
    const products = await ProductData.find();
    res.status(200).json({
      products: products,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
};

const FilterProductController = async (req, res) => {
  try {
    const { type, company, color, price_min, price_max } = req.query;

    const filter = {};

    if (type) filter.type = type;
    if (company) filter.company = { $regex: company, $options: "i" };
    if (color) filter.color = color;
    console.log(filter);
    const SomeData = await ProductData.find(filter).countDocuments();

    res.json({
      data: SomeData,
      message: { type, company, color, price_min, price_max },
    });
  } catch (error) {}
};

module.exports = {
  AllProductsController,
  FilterProductController,
  InventoryDetails,
};
