import express from 'express';
import { PORT } from './config.js';

const app = express();

export default app;

const start = async () => {
  app.listen(PORT, () =>
    console.log(`🚀 Server is up and running on port: ${PORT}`)
  );
};

start();
