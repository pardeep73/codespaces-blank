import { Video } from "../models/Video.model.js"

// POST /upload
export const uploadVideo = async (req, res) => {
  try {
    const { originalname, path, filename } = req.file

    const video = new Video({
      title: originalname,
      videoUrl: path,
      publicId: filename
    })

    await video.save()

    res.status(201).json({
      message: 'Video uploaded successfully',
      data: video
    })
  } catch (err) {
    res.status(500).json({ error: 'Failed to upload video' })
  }
}


