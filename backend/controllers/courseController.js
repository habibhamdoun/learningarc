import db from '../models/db.js';

export const getCourses = (req, res) => {
  const query = 'SELECT * FROM Course';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch courses' });
    } else {
      res.json(results);
    }
  });
};

export const addCourse = (req, res) => {
  const { courseID, duration, title, description, rating } = req.body;

  if (!courseID || !title) {
    return res.status(400).json({ error: 'CourseID and title are required' });
  }

  const query =
    'INSERT INTO Course (courseID, duration, title, description, rating) VALUES (?, ?, ?, ?, ?)';
  const values = [courseID, duration, title, description, rating];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add course' });
    } else {
      res
        .status(201)
        .json({
          message: 'Course added successfully',
          courseID: result.insertId,
        });
    }
  });
};


export const removeCourse = (req, res) => {
  const { courseID } = req.params;

  if (!courseID) {
    return res.status(400).json({ error: 'CourseID is required' });
  }

  const query = 'DELETE FROM Course WHERE courseID = ?';
  db.query(query, [courseID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to remove course' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Course not found' });
    } else {
      res.json({ message: 'Course removed successfully' });
    }
  });
};
