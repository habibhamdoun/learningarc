import express from 'express';
import {
  addComment,
  getCommentByLessonID,
  removeComment,
} from '../controllers/commentController.js';

const router = express.Router();

router.get('/course/:courseID/lesson/:lessonID', getCommentByLessonID);

router.post('/', addComment);

router.delete('/:commentID', removeComment);

export default router;
