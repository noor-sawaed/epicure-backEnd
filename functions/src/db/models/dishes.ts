// import mongoose from "mongoose";
const mongoos = require("mongoose");

const dishesSchema = new mongoos.Schema(
    {
        dishID:
        {
            type: Number,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            enum: ['Breakfast', 'Lunch', 'Dinner'],
            required: true,
        },
        signature: {
            type: String,
            enum: ['Vegan', 'Spicy', 'Vegitarian'],
            required: true,
        },
        restaurantId: {
            type: Number,
            required: true,
        },
        dishType: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

const Dishes = mongoos.model("Dishes", dishesSchema);

module.exports = Dishes;
