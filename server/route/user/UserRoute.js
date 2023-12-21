const express = require("express");
const {
  UserRegisterController,
  UserLoginController,
  UserCartController,
} = require("../../controllers/user/UsersController");
const IsUserLoggedin = require("../../middlewares/authentication/UserAuth");
const UserRouter = express.Router();

UserRouter.post("/register", UserRegisterController);
UserRouter.get("/login", UserLoginController);
UserRouter.get("/user-cart", IsUserLoggedin, UserCartController);

module.exports = UserRouter;
