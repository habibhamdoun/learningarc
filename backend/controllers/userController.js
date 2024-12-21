import db from '../models/db.js';

export const getUserbyID = (req, res) => {
  const { userID } = req.params;

  if (!userID) {
    return res.status(400).json({ error: 'userID is required' });
  }
  const query = 'SELECT * FROM user where userID = ?';
  db.query(query, [parseInt(userID)], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch user' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(results[0]);
    }
  });
};
