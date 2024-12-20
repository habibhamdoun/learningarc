import express from 'express';
import {
  getInstructors,
  getInstructor,
  getInstructorByCourse,
} from '../controllers/instructorController.js';

const router = express.Router();

router.get('/', getInstructors);

router.get('/:teacherID', getInstructor);

router.get('/course/:courseID', getInstructorByCourse);

export default router;
