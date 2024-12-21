export const addVideo = (req, res) => {
  try {
    console.log('Received Payload:', req.body);
    console.log('Received File:', req.file);

    const { description, date, category } = req.body;
    const filename = req.file?.filename;

    if (!description || !date || !category || !filename) {
      console.error('Validation Error: Missing required fields');
      return res.status(400).json({
        error: 'Description, date, category, and file are required',
      });
    }

    let formattedDate;
    try {
      formattedDate = new Date(date).toISOString().slice(0, 10);
    } catch (err) {
      console.error('Date Formatting Error:', err);
      return res.status(400).json({ error: 'Invalid date format' });
    }

    const query = `
      INSERT INTO videos (description, date, category, image)
      VALUES (?, ?, ?, ?)
    `;

    const values = [description, formattedDate, category, filename];

    console.log('Executing Query:', query, values);

    db.query(query, values, (err, result) => {
      if (err) {
        console.error('Database Error:', err);
        return res.status(500).json({ error: 'Database error occurred' });
      }

      const videoId = result.insertId;
      const newFilename = `${category}-${videoId}${path.extname(
        req.file.originalname,
      )}`;
      const oldFilePath = path.join(__dirname, '..', 'uploads', filename);
      const newFilePath = path.join(__dirname, '..', 'uploads', newFilename);

      console.log('Renaming File:', oldFilePath, newFilePath);

      fs.rename(oldFilePath, newFilePath, (renameErr) => {
        if (renameErr) {
          console.error('File Rename Error:', renameErr);
          return res
            .status(500)
            .json({ error: 'Failed to rename uploaded file' });
        }

        console.log('File Renamed Successfully');

        const updateQuery = 'UPDATE videos SET image = ? WHERE id = ?';
        db.query(updateQuery, [newFilename, videoId], (updateErr) => {
          if (updateErr) {
            console.error('Database Update Error:', updateErr);
            return res
              .status(500)
              .json({ error: 'Failed to update file name in database' });
          }

          console.log('Video Added Successfully');
          res.status(201).json({
            message: 'Video added successfully!',
            video: {
              id: videoId,
              description,
              date: formattedDate,
              category,
              image: newFilename,
            },
          });
        });
      });
    });
  } catch (error) {
    console.error('Unexpected Error:', error);
    res.status(500).json({ error: 'Unexpected server error' });
  }
};
