import express from "express";
import {
  getCourses,
  addCourse,
  removeCourse,
  getCourse,
  getCoursesByTeacher // Import the new function
} from "../controllers/courseController.js";
import { verifyTeacher, verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", getCourses); // Public: Anyone can view courses

router.get("/teacher", verifyToken, getCoursesByTeacher); // Protected: Fetch courses by the logged-in teacher

router.post("/", verifyTeacher, addCourse); // Protected: Only teachers can add courses

router.get("/:courseID", getCourse);


router.delete("/:courseID", verifyTeacher, removeCourse); // Protected: Only teachers can delete courses

export default router;
