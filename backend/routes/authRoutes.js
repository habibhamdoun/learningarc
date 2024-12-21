import express from 'express';
import {
  register,
  login,
  verifyToken,
  logout,
} from '../controllers/authController.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', verifyToken, logout); // Optionally protect this route

export default router;
