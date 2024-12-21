import db from '../models/db.js';

// Get all students
export const getStudents = (req, res) => {
  const query = 'SELECT * FROM Student';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch students' });
    } else {
      res.json(results);
    }
  });
};

// Add a new student
export const addStudent = (req, res) => {
  const { email, password, dateOfBirth, profilePicture, description } =
    req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  const query =
    'INSERT INTO Student (email, password, dateOfBirth, profilePicture, description) VALUES (?, ?, ?, ?, ?)';
  const values = [email, password, dateOfBirth, profilePicture, description];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to add student' });
    } else {
      res
        .status(201)
        .json({
          message: 'Student added successfully',
          studentID: result.insertId,
        });
    }
  });
};
