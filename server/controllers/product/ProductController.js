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

const ProductDetailController = async (req, res) => {
  console.log(req.params.id);

  try {
    const products = await ProductData.find({ _id: req.params.id });
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
      Headphone = null,
      Company = null,
      Colour = null,
      Price = "0-1000000000000",
      Sort = null,
      product_name = null,
    } = req.query;

    // const {
    //   type = null,
    //   company = null,
    //   color = null,
    //   price_min = 0,
    //   price_max = 1000000000000,
    //   sorting_criteria = null,
    // } = req.query;

    const sort_type = {};
    const filter = {};

    if (product_name)
      filter.product_name = { $regex: new RegExp(product_name, "i") };

    if (Headphone && Headphone != "Featured") {
      filter.type = Headphone.split(" ")[0];
    }

    if (Colour && Colour != "Featured") filter.color = Colour;
    if (Company && Company != "Featured") filter.brand = Company;
    if (Price && Price != "Featured") {
      const [price_min, price_max] = Price.split("-");
      filter.$and = [
        { price: { $lt: price_max } },
        { price: { $gt: price_min } },
      ];
    }
    if (Sort && Sort != "Featured") {
      const [sortby, order] = Sort.split(",");
      if (sortby == "name") sort_type.product_name = Number(order);
      if (sortby == "price") sort_type.price = Number(order);
    }

    const SomeDatacount = await ProductData.find(filter)
      .sort(sort_type)
      .countDocuments();
    const products = await ProductData.find(filter).sort(sort_type);

    res.json({
      count: SomeDatacount,
      products: products,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  ProductDetailController,
  FilterProductController,
  InventoryDetails,
};
