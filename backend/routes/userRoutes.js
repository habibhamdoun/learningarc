import express from 'express';
import { getUserbyID } from '../controllers/userController.js';

const router = express.Router();

router.get('/:userID', getUserbyID);

export default router;
