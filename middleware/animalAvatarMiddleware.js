const multer = require("multer");
const axios = require("axios");
require("dotenv").config();

const storage = multer.memoryStorage(); // No disk storage, all in memory
const Upload = multer({ storage });

// Custom middleware to upload image to ImgBB
const imgBBUpload = async (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({ error: "No file uploaded" });
    }

    try {
        // Convert image buffer to base64
        const photoBase64 = req.file.buffer.toString("base64");

        // Upload the base64 image to ImgBB
        const imgBBApiKey = process.env.IMGBB_API_KEY;
        const response = await axios.post(
            "https://api.imgbb.com/1/upload",
            null,
            {
                params: {
                    key: imgBBApiKey,
                    image: photoBase64,
                },
            }
        );

        // Attach the uploaded ImgBB URL to the req object
        req.imgURL = response.data.data.url;

        next();
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to upload image to ImgBB" });
    }
};

module.exports = { Upload, imgBBUpload };
