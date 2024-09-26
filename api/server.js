import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
mongoose
  .connect(process.env.MONGODB)
  .then(() => {
    console.log('Connected to mongoDB!');
  })
  .catch((error) => {
    console.log(error);
  });

const app = express();

app.listen(5000, () => {
  console.log('Server is running on port 5000!');
});
