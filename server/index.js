const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const cors = require("cors");
dotenv.config();
//Imports
const ProductRouter = require("./route/product/ProductRouter");
const { ErrorHandler, NotFound } = require("./middlewares/error/ErrorHandler");

//MiddleWares
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

// routes
app.use("/api/products", ProductRouter);

app.use(NotFound);
app.use(ErrorHandler);

app.listen(process.env.PORT, () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log(`Server running on http://localhost:${process.env.PORT}`);
    })
    .catch((err) => console.error(err));
});
