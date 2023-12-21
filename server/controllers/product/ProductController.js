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
    const {
      type = null,
      company = null,
      color = null,
      price_min = 0,
      price_max = 1000000000000,
      sorting_criteria = null,
    } = req.query;

    const sort_type = {};
    const filter = {};
    if (type) filter.type = type;
    if (color) filter.color = color;
    if (company) filter.brand = company;
    if (price_min)
      filter.$and = [
        { price: { $lt: price_max } },
        { price: { $gt: price_min } },
      ];

    if (sorting_criteria) {
      const [sortby, order] = sorting_criteria.split(",");
      if (sortby == "name") sort_type.product_name = Number(order);
      if (sortby == "price") sort_type.price = Number(order);
    }
    const SomeDatacount = await ProductData.find(filter)
      .sort(sort_type)
      .countDocuments();
    const SomeData = await ProductData.find(filter).sort(sort_type);

    res.json({
      count: SomeDatacount,
      data: SomeData,
      message: { type, company, color, price_min, price_max },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  AllProductsController,
  FilterProductController,
  InventoryDetails,
};
