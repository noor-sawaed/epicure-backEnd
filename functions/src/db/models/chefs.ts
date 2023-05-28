// import mongoose from "mongoose";
const mongoose = require("mongoose");

const chefsSchema = new mongoose.Schema(
  {
    chefID: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    about: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Chefs = mongoose.model("Chefs", chefsSchema);

module.exports = Chefs;
