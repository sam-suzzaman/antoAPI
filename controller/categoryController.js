const CategoryModel = require("../model/CategoryModel");

// New Animal add handler
const addCategoryHandler = async (req, res) => {
    const { name } = req.body;

    try {
        const isExist = await CategoryModel.findOne({ name });

        if (isExist) {
            return res.status(400).json({
                status: false,
                message: "Operation Failed",
                result: "Category alread Exists",
            });
        }
        const newCategory = new CategoryModel({
            name,
        });
        await newCategory.save();

        return res.status(201).json({
            status: true,
            message: "Category Created",
            result: "Successfully Created",
        });
    } catch (error) {
        return res.status(401).json({
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
            return res.status(400).json({
                status: false,
                message: "Operation failed",
                result: "List is empty",
            });
        }

        return res.status(201).json({
            status: true,
            message: "Categories fetched",
            result,
        });
    } catch (error) {
        return res.status(400).json({
            status: false,
            message: "Operation failed",
            result: error.message,
        });
    }
};

module.exports = { addCategoryHandler, getCategoriesHandler };
