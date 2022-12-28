import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/shopping');
    console.log('✅ MongoDB connected');
  } catch (error) {
    console.log('❌ MongoDB connection failed');
    console.log(error);
  }
};

export default connectDb;
