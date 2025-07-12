import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/config/db.js'; 

dotenv.config(); // load .env variables

const app = express();

connectDB(); // connect to database

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
