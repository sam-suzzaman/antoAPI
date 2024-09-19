const multer = require("multer");

const { v2: cloudinary } = require("cloudinary");
const streamifier = require("streamifier");

// Multer setup for handling files in memory
const storage = multer.memoryStorage();
const mUpload = multer({ storage });

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadToCloudinary = (req, res, next) => {
    if (!req.file) {
        return res.status(400).json({
            status: false,
            message: "Operation failed",
            result: "No file uploaded",
        });
    }

    // Convert buffer to readable stream and upload directly to Cloudinary
    const uploadStream = cloudinary.uploader.upload_stream(
        { folder: "anto" }, // Optional folder in Cloudinary
        (error, result) => {
            if (error) {
                return res.status(500).json({
                    error: "Cloudinary upload failed",
                    details: error,
                });
            }

            // Attach the Cloudinary URL to the request object for further use
            req.avatarUrl = result.secure_url;
            next();
        }
    );

    // Convert the file buffer to a readable stream and pipe it to Cloudinary
    streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
};

module.exports = { mUpload, uploadToCloudinary };
