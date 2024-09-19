const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Routers
const animalRouter = require("./router/animalRouter");
const categoryRouter = require("./router/categoryRouter");

// Middlewares
app.use(express.json());
app.use(cors());

// main routes
app.use("/animal", animalRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
    res.send("this is base route");
});

module.exports = app;
