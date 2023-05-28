// import mongoose from "mongoose";
const ongoose = require("mongoose");


const daySchema = new ongoose.Schema(
  {
    open:{
      type:String,
      required: true,
    },
    close:{
      type:String,
      required: true,
    }
  },
  { timestamps: false }
);

const workHoursSchema = new ongoose.Schema(
  {
    Sunday:{
      type:daySchema,
      required: true,
    },
    Monday: {
      type:daySchema,
      required: true,
    },
    Tuesday:{
      type:daySchema,
      required: true,
    },
    Wednesday: {
      type:daySchema,
      required: true,
    },
    Thursday:{
      type:daySchema,
      required: true,
    },
    Friday: {
      type:daySchema,
      required: true,
    },
    Saturday: {
      type:daySchema,
      required: true,
    },
    
  },
  { timestamps: false }
);

const restaurantsSchema = new ongoose.Schema(
  {
    workHours:{
      type:workHoursSchema,
      required:true,
    },
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    chefID: {
      type: Number,
      required: true,
    },
    visits: {
      type: Number,
      required: true,
    },
    dateAdded: {
      type: Number,
      required: true,
    },

  },
  { timestamps: true }
);

const Restaurants = ongoose.model("Restaurants", restaurantsSchema);

module.exports = Restaurants;
