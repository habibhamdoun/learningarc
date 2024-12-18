import express from 'express';
import {
  addReply,
  getRepliesByCommentID,
  removeReply,
} from '../controllers/replyController.js';

const router = express.Router();

router.get('/comment/:commentID', getRepliesByCommentID);

router.post('/', addReply);

router.delete('/:replyID', removeReply);

export default router;
