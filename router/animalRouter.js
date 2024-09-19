const express = require("express");
const animalRouter = express.Router();

// Middlewares
const {
    mUpload,
    uploadToCloudinary,
} = require("../middleware/animalAvatarMiddleware");

// controllers
const {
    addAnimalHandler,
    getAnimalsHandler,
} = require("../controller/animalController");

// Routes
animalRouter.post(
    "/",
    mUpload.single("photo"),
    uploadToCloudinary,
    addAnimalHandler
);
animalRouter.get("/", getAnimalsHandler);

module.exports = animalRouter;
