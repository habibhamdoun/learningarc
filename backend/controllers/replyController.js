import db from '../models/db.js';

export const getRepliesByCommentID = (req, res) => {
  const { commentID } = req.params;

  if (!commentID) {
    return res.status(400).json({ error: 'commentID is required' });
  }

  const query = 'SELECT * FROM reply WHERE parentCommentID = ?';
  db.query(query, [parseInt(commentID)], (err, results) => {
    if (err) {
      console.error('Database query failed:', err);
      return res
        .status(500)
        .json({ error: 'Internal Server Error: Failed to fetch replies' });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: 'No replies found for the given commentID' });
    }

    res.json(results);
  });
};

export const addReply = (req, res) => {
  console.log('Received Payload:', req.body);

  const { parentCommentID, userID, content, courseID, commenter } = req.body;

  if (!parentCommentID || !userID || !content || !courseID || !commenter) {
    return res.status(400).json({
      error:
        'parentCommentID, userID, content, courseID, and commenter are required',
    });
  }

  const query = `
      INSERT INTO reply (parentCommentID, userID, content, courseID, commenter, datePosted)
      VALUES (?, ?, ?, ?, ?, ?)
  `;
  const values = [
    parentCommentID,
    userID,
    content,
    courseID,
    commenter,
    new Date(),
  ];

  db.query(query, values, (err, results) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).json({ error: 'Database error occurred' });
    }
    res.status(201).json({
      message: 'Reply added successfully!',
      reply: {
        id: results.insertId,
        parentCommentID,
        userID,
        content,
        courseID,
        commenter,
        datePosted: new Date(),
      },
    });
  });
};

export const removeReply = (req, res) => {
  const { replyID } = req.params;

  if (!replyID) {
    return res.status(400).json({ error: 'replyID is required' });
  }

  const query = 'DELETE FROM reply WHERE replyID = ?';
  db.query(query, [replyID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to remove reply' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Reply not found' });
    } else {
      res.json({ message: 'Reply removed successfully' });
    }
  });
};
