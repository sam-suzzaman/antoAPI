const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Animal Valid name is required"],
        },
        photo: {
            type: String,
            trim: true,
            required: [true, "Animal photo is required"],
        },
        category: {
            type: String,
            required: [true, "Animal category is required"],
        },
    },
    {
        timestamps: true,
    }
);

const AnimalModel = mongoose.model("animal", AnimalSchema);
module.exports = AnimalModel;
