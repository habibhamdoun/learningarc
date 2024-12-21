import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '../models/db.js';
import dotenv from 'dotenv';

dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const register = async (req, res) => {
  try {
    const { email, username, password, role, description } = req.body;

    if (!email || !username || !password || !role || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

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

    const hashedPassword = await bcrypt.hash(password, 10);

    const insertQuery =
      'INSERT INTO User (email, username, password, role, description) VALUES (?, ?, ?, ?, ?)';
    const newUserId = await new Promise((resolve, reject) => {
      db.query(
        insertQuery,
        [email, username, hashedPassword, role, description],
        (err, results) => {
          if (err) return reject(err);
          resolve(results.insertId);
        },
      );
    });

    const insertedUser = await new Promise((resolve, reject) => {
      const fetchQuery =
        'SELECT userID AS id, email, username, role, description FROM User WHERE userID = ?';
      db.query(fetchQuery, [newUserId], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    res.status(201).json({
      message: 'User registered successfully',
      user: insertedUser,
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await new Promise((resolve, reject) => {
      const query = 'SELECT * FROM User WHERE email = ?';
      db.query(query, [email], (err, results) => {
        if (err) return reject(err);
        resolve(results[0]);
      });
    });

    if (!user) {
      return res
        .status(404)
        .json({ error: 'User not found. Please register first.' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign(
      { id: user.userID, email: user.email, role: user.role },
      SECRET_KEY,
      { expiresIn: '1h' },
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      userID: user.userID,
      description: user.description,
    });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'Server error' });
  }
};

export const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    req.user = decoded;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    res.status(401).json({ error: 'Invalid token' });
  }
};

export const logout = (req, res) => {
  localStorage.setItem('userID', null);
  try {
    res.status(200).json({ message: 'Logout successful' });
  } catch (error) {
    console.error('Error during logout:', error);
    res.status(500).json({ error: 'Server error' });
  }
};
