// Import mongoose using ES module syntax
import mongoose from 'mongoose';

// Create async function to connect to MongoDB
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // [exit the app if connection fails]
  }
};

// Export the function for use in other modules
export default connectDB;
