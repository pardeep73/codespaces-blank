import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import fs from 'fs';

// Setup multer to store files temporarily
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'temp/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ storage });

// Cloudinary config (make sure it's already set in cloudinary.js)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Middleware to upload video to Cloudinary
const uploadVideoToCloudinary = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No video file provided' });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: 'video',
      folder: 'videos',
    });

    // Delete the local file after uploading
    fs.unlinkSync(req.file.path);

    // Save the Cloudinary URL in request object
    req.videoUrl = result.secure_url;

    next(); // continue to next middleware or route
  } catch (error) {
    console.error('Cloudinary upload error:', error);
    res.status(500).json({ message: 'Failed to upload video to Cloudinary' });
  }
};

export const videoUpload = upload.single('video'); // multer middleware
export { uploadVideoToCloudinary };
