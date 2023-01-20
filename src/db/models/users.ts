import mongoose from "mongoose";

const usersSchema = new mongoose.Schema(
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

const Users = mongoose.model("Users", usersSchema);

export default Users;
