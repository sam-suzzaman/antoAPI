const AnimalModel = require("../model/AnimalModel");

// New Animal add handler
const addAnimalHandler = async (req, res) => {
    const data = req.body;

    res.status(201).json({
        status: true,
        message: "Animal added",
    });
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
