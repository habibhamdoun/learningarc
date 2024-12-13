import express from 'express';
import {
  getCourses,
  addCourse,
  removeCourse,
  getCourse,
} from '../controllers/courseController.js';

const router = express.Router();

router.get('/', getCourses);

router.post('/', addCourse);

router.get('/:courseID', getCourse);
router.delete('/:courseID', removeCourse);

export default router;
