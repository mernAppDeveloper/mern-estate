import express from 'express';
import { signup } from '../controllers/authController.js';
import { signin } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);

export default router;
