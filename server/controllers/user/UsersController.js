const UserData = require("../../model/user/UserSchema");
const ProductData = require("../../model/product/ProductSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UserRegisterController = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const UserExists = await UserData.findOne({
      email: email,
      mobile: mobile,
    });

    if (!UserExists) {
      const user = await UserData.create({
        name: name,
        email: email,
        mobile: mobile,
        password: encryptedPassword,
        cart: [],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (user) {
        const jwtToken = await jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 7200,
        });

        res.status(200).json({
          message: "User created",
          token: jwtToken,
        });
      }
    } else {
      res.json({
        message: "User Exists",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: "User creation Failed",
      message: err.message,
    });
  }
};

const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await UserData.findOne({ email });

    const passwordMatched = await bcrypt.compare(password, user.password);

    if (!passwordMatched) {
      res.status(500).json({
        message: "user failed",
        token: 0,
      });
    } else {
      const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 48000,
      });

      res.status(200).json({
        message: `user success`,
        token: jwtToken,
        cart: user.cart,
      });
    }
  } catch (err) {
    res.json({
      message: "Invalid user Credentials",
    });
  }
};

const UserCartListController = async (req, res) => {
  try {
    const { _id, name, email, mobile, password, cart } = req.body.user;
    const UserCart = await UserData.findOne({ email: email }).select({
      cart: 1,
    });

    if (UserCart) {
      res.json({
        UserCart: UserCart,
      });
    }
  } catch (error) {
    res.json({
      UserCart: error.message,
    });
  }
};

const GetCartController = async (req, res) => {
  try {
    const ItemList = Object.keys(req.query);
    const Quantities = Object.values(req.query);
    const CartProducts = await ProductData.find({
      _id: { $in: ItemList },
    });

    CartProducts.forEach((item, index, array) => {
      array[index] = { ...item.toJSON(), ...{ quantity: Quantities[index] } };
    });

    res.json({
      message: "working",
      CartItem: CartProducts,
    });
  } catch (error) {
    res.json({
      error: error.message,
    });
  }
};

const SetCartController = async (req, res) => {
  try {
    const usercart = req.query;
    const { _id, name, email, mobile, password, cart } = req.body.user;
    const user = await UserData.find({ email: email });

    if (user) {
      const result = await UserData.updateOne(
        { _id: _id },
        {
          $set: {
            cart: { ...cart[0], ...usercart },
            updatedAt: new Date(),
          },
        }
      );
    }
    res.json({
      message: "working",
    });
  } catch (error) {}
};

module.exports = {
  UserRegisterController,
  UserLoginController,
  UserCartListController,
  GetCartController,
  SetCartController,
};
