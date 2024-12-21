import express from 'express';
import multer from 'multer';
import { addVideo } from '../controllers/uploadsController.js';

const videoRouter = express.Router();

const storage = multer.diskStorage({
  destination: 'uploads',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

videoRouter.post('/add', upload.single('file'), addVideo);


export default videoRouter;
