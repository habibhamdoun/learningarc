import db from '../models/db.js';

export const getLessonByCourseID = (req, res) => {
  const { courseID } = req.params;

  if (!courseID) {
    return res.status(400).json({ error: 'CourseID is required' });
  }

  const query = 'SELECT * FROM Lesson WHERE courseID = ?';
  db.query(query, [courseID], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch lessons' });
    } else if (results.length === 0) {
      res
        .status(404)
        .json({ error: 'No lessons found for the given courseID' });
    } else {
      res.json(results);
    }
  });
};
export const getLesson = (req, res) => {
  const { lessonID } = req.params;

  if (!lessonID) {
    return res.status(400).json({ error: 'LessonID is required' });
  }

  const query = 'SELECT * FROM Lesson WHERE lessonID = ?';
  db.query(query, [lessonID], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch lesson' });
    } else if (results.length === 0) {
      res.status(404).json({ error: 'Lesson not found' });
    } else {
      res.json(results[0]);
    }
  });
};

export const getLessons = (req, res) => {
  const query = 'SELECT * FROM Lesson';
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to fetch lessons' });
    } else {
      res.json(results);
    }
  });
};

export const addLesson = (req, res) => {
  const { courseID, title, description, duration } = req.body;

  if (!courseID || !title) {
    return res.status(400).json({ error: "CourseID and title are required" });
  }

  const query =
    "INSERT INTO Lesson (courseID, title, description, duration) VALUES (?, ?, ?, ?)";
  const values = [courseID, title, description || null, duration || null];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error("Error adding lesson:", err);
      return res.status(500).json({ error: "Failed to add lesson" });
    }

    res.status(201).json({
      message: "Lesson added successfully",
      lessonID: result.insertId,
    });
  });
};



export const removeLesson = (req, res) => {
  const { lessonID } = req.params;

  if (!lessonID) {
    return res.status(400).json({ error: 'LessonID is required' });
  }

  const query = 'DELETE FROM Lesson WHERE lessonID = ?';
  db.query(query, [lessonID], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to remove lesson' });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ error: 'Lesson not found' });
    } else {
      res.json({ message: 'Lesson removed successfully' });
    }
  });
};
