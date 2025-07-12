import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  videoUrl: {
    type: String,
    required: true
  },
  publicId: {
    type: String,
    required: true // Cloudinary's ID to manage the video
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

export const Video = mongoose.model('Video', videoSchema)
