import express from 'express';
import {
  getCourses,
  addCourse,
  removeCourse,
  getCourse,
  getCoursesByTeacher,
} from '../controllers/courseController.js';
import { verifyTeacher, verifyToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getCourses);

router.get('/teacher', verifyToken, getCoursesByTeacher);

router.post('/', verifyTeacher, addCourse);

router.get('/:courseID', getCourse);

router.delete('/:courseID', verifyTeacher, removeCourse);

export default router;
