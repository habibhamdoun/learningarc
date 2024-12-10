import express from 'express';
import { getCourses, addCourse, removeCourse } from '../controllers/courseController.js';

const router = express.Router();

router.get('/', getCourses);

router.post('/', addCourse);

router.delete('/:courseID', removeCourse);

export default router;
