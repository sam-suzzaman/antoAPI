const AnimalModel = require("../model/AnimalModel");

// New Animal add handler
const addAnimalHandler = async (req, res) => {
    try {
        const { name, category } = req.body;
        const photoUrl = req.imgURL; // photo url after upload

        // Create a new Animal document
        const newAnimal = new AnimalModel({
            name,
            category,
            photo: photoUrl,
        });
        await newAnimal.save();

        res.status(201).json({
            status: true,
            message: "Animal added",
        });
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "Operation failed",
            result: error.message,
        });
    }
};

// Animal fetch handler with filter
const getAnimalsHandler = async (req, res) => {
    const data = req.body;

    res.status(201).json({
        status: true,
        message: "Animals fetched",
    });
};

module.exports = { addAnimalHandler, getAnimalsHandler };
