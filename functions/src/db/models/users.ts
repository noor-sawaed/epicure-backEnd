// import mongoose from "mongoose";
const mogoose = require("mongoose");

const usersSchema = new mogoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    HashedPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Users = mogoose.model("Users", usersSchema);

module.exports = Users;
