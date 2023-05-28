import mongoose from "mongoose";
const userPass = require("./sercret");
const connectDb = async () => {
  mongoose.set("strictQuery", true);
  await mongoose.connect(userPass);
};

export { connectDb };
