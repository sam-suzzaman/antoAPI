const express = require("express");
const categoryRouter = express.Router();

// controllers
const {
    addCategoryHandler,
    getCategoriesHandler,
} = require("../controller/categoryController");

// Routes
categoryRouter.post("/", addCategoryHandler);
categoryRouter.get("/", getCategoriesHandler);

module.exports = categoryRouter;
