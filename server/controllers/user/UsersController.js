const UserData = require("../../model/user/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register Controller
const UserRegisterController = async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);

    const UserExists = await UserData.findOne({
      email: email,
      mobile: mobile,
    });
    console.log(UserExists);
    if (!UserExists) {
      const user = await UserData.create({
        name: name,
        email: email,
        mobile: mobile,
        password: encryptedPassword,
        cart: [{ item: 1 }, { item2: 23 }],
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (user) {
        const jwtToken = await jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
          expiresIn: 7200,
        });

        res.status(200).json({
          message: "User created",
          token: UserExists,
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

//Login Controller
const UserLoginController = async (req, res) => {
  try {
    const { email, password } = req.query;
    const user = await UserData.findOne({ email });
    console.log(user);
    const passwordMatched = await bcrypt.compare(password, user.password);
    console.log(passwordMatched);
    if (!passwordMatched) {
      res.status(500).json({
        message: "user failed",
        token: 0,
      });
    } else {
      const jwtToken = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
        expiresIn: 7200,
      });
      res.status(200).json({
        message: `user success`,
        token: jwtToken,
      });
    }
  } catch (err) {
    res.json({
      message: "Invalid user Credentials",
    });
  }
};

const UserCartController = async (req, res) => {
  res.json({
    message: "working",
  });
};

module.exports = {
  UserRegisterController,
  UserLoginController,
  UserCartController,
};
