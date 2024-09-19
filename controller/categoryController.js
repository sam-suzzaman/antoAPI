const CategoryModel = require("../model/CategoryModel");

// New Animal add handler
const addCategoryHandler = async (req, res) => {
    const { name } = req.body;

    try {
        const isExist = await CategoryModel.findOne({ name });

        if (isExist) {
            res.status(400).json({
                status: false,
                message: "Operation Failed",
                result: "Category alread Exists",
            });
        } else {
            const newCategory = new CategoryModel({
                name,
            });
            await newCategory.save();

            res.status(201).json({
                status: true,
                message: "Category Created",
                result: "Successfully Created",
            });
        }
    } catch (error) {
        res.status(401).json({
            status: false,
            message: "Operation Failed",
            result: error.message,
        });
    }
};

// Animal fetch handler with filter
const getCategoriesHandler = async (req, res) => {
    try {
        const result = await CategoryModel.find({});

        if (!result.length) {
            res.status(400).json({
                status: false,
                message: "Operation failed",
                result: "List is empty",
            });
        } else {
            res.status(201).json({
                status: true,
                message: "Categories fetched",
                result,
            });
        }
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Operation failed",
            result: error.message,
        });
    }
};

module.exports = { addCategoryHandler, getCategoriesHandler };
