const AnimalModel = require("../model/AnimalModel");

// New Animal add handler
const addAnimalHandler = async (req, res) => {
    try {
        const { name, category } = req.body;
        const photoUrl = req.avatarUrl; // photo url after upload

        // Create a new Animal document
        const newAnimal = new AnimalModel({
            name,
            category,
            photo: photoUrl,
        });
        const result = await newAnimal.save();

        return res.status(201).json({
            status: true,
            message: "Animal added",
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

// Animal fetch handler with filter
const getAnimalsHandler = async (req, res) => {
    try {
        const { category } = req.query;

        let filter = {};

        if (category) {
            filter.category = { $regex: new RegExp(category, "i") };
        }

        const result = await AnimalModel.find(filter);

        if (!result.length) {
            return res.status(400).json({
                status: false,
                message: "Animals list empty",
                result: "List is empty",
            });
        }
        return res.status(200).json({
            status: true,
            message: "Animals fetched",
            result: result,
        });
    } catch (error) {
        return res.status(401).json({
            status: false,
            message: "Operation failed",
            result: error.message,
        });
    }
};

module.exports = { addAnimalHandler, getAnimalsHandler };
