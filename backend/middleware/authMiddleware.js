import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

// Middleware to verify token
export const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).json({ error: "No token provided" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info (including role) to the request
    next();
  } catch (error) {
    console.error("Token verification error:", error.message);
    res.status(401).json({ error: "Invalid or expired token" });
  }
};

// Middleware to verify that the user is a teacher
export const verifyTeacher = (req, res, next) => {
  verifyToken(req, res, () => {
    if (!req.user || req.user.role !== "TEACHER") {
      return res.status(403).json({ error: "Unauthorized: Only teachers allowed" });
    }
    next();
  });
};
