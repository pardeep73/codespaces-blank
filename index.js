import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js'; 
import router from './src/routes/videoRoute.js';

dotenv.config(); // load .env variables

const app = express();
app.use(express.json())

connectDB(); // connect to database
app.use('/api/video', router)
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
