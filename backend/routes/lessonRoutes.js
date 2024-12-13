import express from 'express';
import {
  addLesson,
  removeLesson,
  getLesson,
  getLessonByCourseID,
  getLessons,
} from '../controllers/lessonController.js';

const router = express.Router();

// Route to get all lessons
router.get('/', getLessons);

// Route to get lessons by courseID
router.get('/course/:courseID', getLessonByCourseID);

// Route to get a single lesson by lessonID
router.get('/:lessonID', getLesson);

// Route to add a new lesson
router.post('/', addLesson);

// Route to remove a lesson by lessonID
router.delete('/:lessonID', removeLesson);

export default router;
