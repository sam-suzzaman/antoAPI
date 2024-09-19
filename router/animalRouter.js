const express = require("express");
const animalRouter = express.Router();

// Middlewares
const { Upload, imgBBUpload } = require("../middleware/animalAvatarMiddleware");

// controllers
const {
    addAnimalHandler,
    getAnimalsHandler,
} = require("../controller/animalController");

// Routes
animalRouter.post("/", Upload.single("photo"), imgBBUpload, addAnimalHandler);
animalRouter.get("/", getAnimalsHandler);

module.exports = animalRouter;
