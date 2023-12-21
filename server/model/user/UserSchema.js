const mongoose = require("mongoose");
var userDataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    cart: [],
    createdAt: Date,
    updatedAt: Date,
    isloggedIn: Boolean,
    isAdmin: Boolean,
  },
  { collection: "user-data" }
);

var UserData = mongoose.model("UserData", userDataSchema);

module.exports = UserData;
