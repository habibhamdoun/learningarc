import db from '../models/db.js';

export const getCourses = (req, res) => {
  const query = 'SELECT * FROM Course';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching courses:', err);
      res.status(500).json({ error: 'Failed to fetch courses' });
    } else {
      res.status(200).json(results);
    }
  });
};

export const addCourse = (req, res) => {
  const { title, description, duration, thumbnail } = req.body;
  const teacherID = req.user?.id;

  if (!title || !description || !duration || !thumbnail) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (!teacherID) {
    return res.status(403).json({ error: 'Unauthorized: Teacher not logged in' });
  }

  const query =
    'INSERT INTO Course (title, description, duration, thumbnail, teacherID) VALUES (?, ?, ?, ?, ?)';
  const values = [title, description, duration, thumbnail, teacherID];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Error adding course:', err);
      res.status(500).json({ error: 'Failed to add course' });
    } else {
      res.status(201).json({
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
      console.error('Error removing course:', err);
      res.status(500).json({ error: 'Failed to remove course' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Course not found' });
    } else {
      res.status(200).json({ message: 'Course removed successfully' });
    }
  });
};
