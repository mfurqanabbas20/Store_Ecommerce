const express = require("express");

const app = express();

const mongoose = require("mongoose");

const { PORT, connectionString } = require("./config");
const cors = require("cors");
const auth = require("./routes/auth");
const products = require("./routes/products");
const login = require('./routes/login')
app.use(express.json());
app.use(cors());
app.use("/signup", auth);
app.use("/product", products);
app.use("/login", login)

mongoose
  .connect(connectionString)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is listening on PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
