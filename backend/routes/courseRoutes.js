import express from "express";
import { getCourses, addCourse, removeCourse, getCourse } from "../controllers/courseController.js";
import { verifyTeacher } from "../middleware/authMiddleware.js";


const router = express.Router();

router.get("/", getCourses); // Public: Anyone can view courses

router.post("/", verifyTeacher, addCourse); // Protected: Only teachers can add courses

router.get("/:courseID", getCourse); // Public: Anyone can view a specific course
router.delete("/:courseID", verifyTeacher, removeCourse); // Protected: Only teachers can delete courses

export default router;
