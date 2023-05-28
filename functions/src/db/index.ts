// import mongoose from "mongoose";
import mongoose from "mongoose";

const connectDb = async () => {
  // mongoose.set("strictQuery", true);
  // await mongoose.connect("mongodb+srv://epicure:pbDIYoy1Zhbusng3@main-projects.djscmg5.mongodb.net/epicuredb");
  // await mongoose.connect('mongodb://epicure:pbDIYoy1Zhbusng3@localhost:27017/epicuredb');
  mongoose.set("strictQuery", true);
  mongoose.connect('mongodb+srv://epicure:pbDIYoy1Zhbusng3@main-projects.djscmg5.mongodb.net/epicuredb')
  .then(() => console.log('MongoDB connected...'))
  .catch((err) => console.log(err));
};

export { connectDb };
