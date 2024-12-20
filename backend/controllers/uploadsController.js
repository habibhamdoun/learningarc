import db from '../models/db.js';
import fs from 'fs';
import path from 'path';

export const addVideo = (req, res) => {
  console.log('Received Payload:', req.body);

  const { description, date, category } = req.body;
  const filename = req.file?.filename;

  // Validate required fields
  if (!description || !date || !category || !filename) {
    return res.status(400).json({
      error: 'description, date, category, and file are required',
    });
  }

  const query = `
      INSERT INTO videos (description, date, category, image)
      VALUES (?, ?, ?, ?)
  `;

  const values = [description, date, category, filename];

  db.query(query, values, (err, result) => {
    if (err) {
      console.error('Database Error:', err);
      return res.status(500).json({ error: 'Database error occurred' });
    }

    const videoId = result.insertId; // Auto-increment ID
    const newFilename = `${category}-${videoId}${path.extname(
      req.file.originalname,
    )}`;
    const newFilePath = path.join('uploads', newFilename);
    const oldFilePath = path.join('uploads', filename);

    // Rename the uploaded file to include the video ID
    fs.rename(oldFilePath, newFilePath, (err) => {
      if (err) {
        console.error('Error renaming file:', err);
        return res
          .status(500)
          .json({ error: 'Failed to rename uploaded file' });
      }

      // Update the filename in the database
      const updateQuery = 'UPDATE videos SET image = ? WHERE id = ?';
      db.query(updateQuery, [newFilename, videoId], (updateErr) => {
        if (updateErr) {
          console.error('Database Error:', updateErr);
          return res
            .status(500)
            .json({ error: 'Failed to update file name in database' });
        }

        res.status(201).json({
          message: 'Video added successfully!',
          video: {
            id: videoId,
            description,
            date,
            category,
            image: newFilename,
          },
        });
      });
    });
  });
};
