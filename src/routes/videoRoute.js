import express from 'express'
import { uploadVideo } from '../controllers/videoController.js'
import { uploadVideoToCloudinary } from '../middlewares/uploadVideo.js'


uploadVideo

const router = express.Router()

router.post('/upload', uploadVideoToCloudinary, uploadVideo)

export default router;
