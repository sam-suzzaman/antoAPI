const CategoryModel = require("../model/CategoryModel");

// New Animal add handler
const addCategoryHandler = async (req, res) => {
    const data = req.body;

    res.status(201).json({
        status: true,
        message: "Category added",
    });
};

// Animal fetch handler with filter
const getCategoriesHandler = async (req, res) => {
    const data = req.body;

    res.status(201).json({
        status: true,
        message: "Categories fetched",
    });
};

module.exports = { addCategoryHandler, getCategoriesHandler };
