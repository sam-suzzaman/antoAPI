const express = require("express");
const animalRouter = express.Router();

// controllers
const {
    addAnimalHandler,
    getAnimalsHandler,
} = require("../controller/animalController");

// Routes
animalRouter.post("/", addAnimalHandler);
animalRouter.get("/", getAnimalsHandler);

module.exports = animalRouter;
