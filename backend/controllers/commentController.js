import db from '../models/db.js';

export const getCommentByLessonID = (req, res) => {
  const { courseID, lessonID } = req.params;

  if (!courseID || !lessonID) {
    return res
      .status(400)
      .json({ error: 'courseID and lessonID are required' });
  }

  const query = 'SELECT * FROM comment WHERE courseID = ? AND lessonID = ?';
  db.query(query, [courseID, lessonID], (err, results) => {
    if (err) {
      console.error('Database query failed:', err);
      return res
        .status(500)
        .json({ error: 'Internal Server Error: Failed to fetch comments' });
    }

    if (results.length === 0) {
      return res.status(404).json({
        error: 'No comments found for the given courseID and lessonID',
      });
    }

    res.json(results);
  });
};

export const addComment = (req, res) => {
  const { commentID, lessonID, studentID, content, datePosted } = req.body;

  if (!lessonID || !commentID || !content) {
    return res
      .status(400)
      .json({ error: 'commentID, lessonID, and content are required' });
  }

  const query =
    'INSERT INTO Comment (commentID, lessonID, studentID, content, datePosted) VALUES (?, ?, ?, ?, ?)';
  const values = [commentID, lessonID, studentID, content, datePosted];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add Comment' });
    } else {
      res.status(201).json({
        message: 'Comment added successfully',
        lessonID: result.insertId,
      });
    }
  });
};

export const removeComment = (req, res) => {
  const { commentID } = req.params;

  if (!commentID) {
    return res.status(400).json({ error: 'commentID is required' });
  }

  const query = 'DELETE FROM Comment WHERE commentID = ?';
  db.query(query, [lessonID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to remove comment' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'comment not found' });
    } else {
      res.json({ message: 'comment removed successfully' });
    }
  });
};
