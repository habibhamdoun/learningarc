import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info (including role) to the request
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export const verifyTeacher = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user?.role !== "TEACHER") {
      return res.status(403).json({ error: "Unauthorized: Only teachers allowed" });
    }
    next();
  });
};
