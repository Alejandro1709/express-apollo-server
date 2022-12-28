import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

export const PORT = process.env.PORT || 4000;
export const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost:27017/shopping';
