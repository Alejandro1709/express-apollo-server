import mongoose from 'mongoose';
import { MONGO_URI } from '../config.js';

const connectDb = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.log('❌ MongoDB connection failed');
    console.log(error);
  }
};

export default connectDb;
