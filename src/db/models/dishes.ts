import mongoose from "mongoose";

const dishesSchema = new mongoose.Schema(
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
        }
    },
    { timestamps: true }
);

const dishes = mongoose.model("dishes", dishesSchema);

export default dishes;