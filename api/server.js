import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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
app.use(express.json());

app.listen(5000, () => {
  console.log('Server is running on port 5000!');
});

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);

app.use((error, req, res, next) => {
  const statusCode = error.statusCode || 500;
  const message = error.message || 'Internal server error';
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
