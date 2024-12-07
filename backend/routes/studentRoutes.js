import express from 'express';
import { getStudents, addStudent } from '../controllers/studentController.js';

const router = express.Router();

// GET all students
router.get('/', getStudents);

// POST a new student
router.post('/', addStudent);

export default router;
