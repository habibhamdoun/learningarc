import db from '../models/db.js';

export const getInstructors = (req, res) => {
  const query = 'SELECT * FROM user where role="TEACHER"';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch instructors' });
    } else {
      res.json(results);
    }
  });
};

export const getInstructor = (req, res) => {
  const { teacherID } = req.params;

  if (!teacherID) {
    return res.status(400).json({ error: 'TeacherID is required' });
  }

  const query =
    'SELECT * FROM user WHERE role = "TEACHER" AND userID = ? LIMIT 1';
  db.query(query, [teacherID], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch instructor' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Instructor not found' });
    } else {
      res.json(results[0]);
    }
  });
};

export const getInstructorByCourse = (req, res) => {
  const { courseID } = req.params;

  if (!courseID) {
    return res.status(400).json({ error: 'CourseID is required' });
  }

  const query = `SELECT * FROM user WHERE role = "TEACHER" AND userID = (SELECT userID FROM course WHERE courseID = ? LIMIT 1);`;

  db.query(query, [courseID], (err, results) => {
    if (err) {
      console.error('Database query error:', err);
      return res
        .status(500)
        .json({ error: 'Failed to fetch instructor for the course' });
    }

    if (results.length === 0) {
      return res
        .status(404)
        .json({ error: 'No instructor found for the given courseID' });
    }

    res.json(results[0]);
  });
};
