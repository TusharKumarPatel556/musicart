const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config();
//Imports
const ProductRouter = require("./route/product/ProductRouter");
const UserRouter = require("./route/user/UserRoute");
// const { ErrorHandler, NotFound } = require("./middlewares/error/ErrorHandler");

//MiddleWares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

const CorsRules = {
  origin: "http://localhost:5173",
  methods: "GET, POST, PUT",
  optionsSuccessStatus: 204,
};
app.use(cors(CorsRules));

// routes
app.use("/api/products", ProductRouter);
app.use("/api/user", UserRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ status: "OK" });
});

// app.use(NotFound);
// app.use(ErrorHandler);

app.listen(process.env.PORT || 3000, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    })
    .catch((err) => console.error(err));
});
