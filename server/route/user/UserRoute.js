const express = require("express");
const {
  UserRegisterController,
  UserLoginController,
  GetCartController,
  SetCartController,
} = require("../../controllers/user/UsersController");
const IsUserLoggedin = require("../../middlewares/authentication/UserAuth");
const UserRouter = express.Router();

UserRouter.post("/register", UserRegisterController);
UserRouter.get("/login", UserLoginController);
UserRouter.get("/get-user-cart", IsUserLoggedin, GetCartController);
UserRouter.put("/set-user-cart", IsUserLoggedin, SetCartController);

module.exports = UserRouter;
