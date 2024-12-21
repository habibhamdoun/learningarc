import express from 'express';
import {
  addLesson,
  removeLesson,
  getLesson,
  getLessonByCourseID,
} from '../controllers/lessonController.js';

const router = express.Router();

router.get('/course/:courseID', getLessonByCourseID);

router.get('/:lessonID', getLesson);

router.post('/', addLesson);

router.delete('/:lessonID', removeLesson);

export default router;
