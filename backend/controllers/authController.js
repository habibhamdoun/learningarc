import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import db from "../models/db.js";

import dotenv from "dotenv";
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const register = async (req, res) => {
  try {
    const { email, username, password, role } = req.body;

    if (!email || !username || !password || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    const existingUser = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM User WHERE email = ?";
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery =
      "INSERT INTO User (email, username, password, role) VALUES (?, ?, ?, ?)";
    await new Promise((resolve, reject) => {
      db.query(
        insertQuery,
        [email, username, hashedPassword, role],
        (err, results) => {
          if (err) return reject(err);
          resolve(results);
        }
      );
    });

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password are required" });
    }

    let user = await new Promise((resolve, reject) => {
      const query = "SELECT * FROM User WHERE email = ?";
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    if (!user) {
      const defaultRole = "STUDENT";
      const hashedPassword = await bcrypt.hash(password, 10);

      const insertQuery =
        "INSERT INTO User (email, username, password, role) VALUES (?, ?, ?, ?)";
      await new Promise((resolve, reject) => {
        db.query(
          insertQuery,
          [email, email.split("@")[0], hashedPassword, defaultRole],
          (err, results) => {
            if (err) return reject(err);
            resolve(results);
          }
        );
      });

      user = await new Promise((resolve, reject) => {
        const query = "SELECT * FROM User WHERE email = ?";
        db.query(query, [email], (err, results) => {
          if (err) return reject(err);
          resolve(results[0]);
        });
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.userID, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "No token provided" });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
};
