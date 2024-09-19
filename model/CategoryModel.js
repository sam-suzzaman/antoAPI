const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, "Category name is required"],
        },
    },
    {
        timestamps: true,
    }
);

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
