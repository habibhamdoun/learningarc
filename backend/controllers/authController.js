import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/db.js';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

// Register a new user
// Register a new user
export const register = async (req, res) => {
  try {
    const { email, username, password, role, description } = req.body;

    // Validate required fields
    if (!email || !username || !password || !role || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Check if user already exists
    const existingUser = await new Promise((resolve, reject) => {
      const query = 'SELECT * FROM User WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user into the database
    const insertQuery =
      'INSERT INTO User (email, username, password, role, description) VALUES (?, ?, ?, ?, ?)';
    const newUserId = await new Promise((resolve, reject) => {
      db.query(
        insertQuery,
        [email, username, hashedPassword, role, description],
        (err, results) => {
          if (err) return reject(err);
          resolve(results.insertId); // Resolve with the inserted user ID
        },
      );
    });

    // Fetch the inserted user to include all fields in the response
    const insertedUser = await new Promise((resolve, reject) => {
      const fetchQuery =
        'SELECT userID AS id, email, username, role, description FROM User WHERE userID = ?';
      db.query(fetchQuery, [newUserId], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]); // Resolve with the inserted user's details
      });
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: insertedUser, // Send the complete user object, including description
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Login user
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate required fields
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Check if user exists in the database
    const user = await new Promise((resolve, reject) => {
      const query = 'SELECT * FROM User WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    // If user does not exist, return an error
    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not found. Please register first.' });
    }

    // Validate the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { id: user.userID, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' },
    );

    // Send response with userID and token
    res.status(200).json({
      message: 'Login successful',
      token,
      userID: user.userID, // Include userID in the response
      description: user.description, // Include description in the response
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// Middleware to verify token
export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded; // Attach user info to the request
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

// Logout user
export const logout = (req, res) => {
  try {
    // Inform client to clear token
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

// const getUserbyID = (req, res) => {
//   const { userID } = req.params;
//   if (!userID) {
//     return res.status(400).json({ error: 'userID is required' });
//   }
//   const query = 'SELECT * FROM user where userID= ?';
//   db.query(query, [userID], (err, results) => {
//     if (err) {
//       console.error(err);
//       res.status(500).json({ error: 'Failed to fetch user' });
//     } else if (results.length === 0) {
//       res.status(404).json({ error: 'Lesson not found' });
//     } else {
//       res.json(results[0]);
//     }
//   });
// };
