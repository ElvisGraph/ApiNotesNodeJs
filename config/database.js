const mongoose = require("mongoose");
require('dotenv').config()

const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    })
    .then(
      () => console.log("Database Conetada"),
      (err) => console.log(`${err}`)
    );
};
module.exports = {connect};
