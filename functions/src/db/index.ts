// import mongoose from "mongoose";
import mongoose from "mongoose";
const userPass = require("./sercrets");
const connectDb = async () => {
  mongoose.set("strictQuery", true);
  mongoose.connect(userPass)
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
};

export { connectDb };
