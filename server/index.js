const express = require('express');
const jwt = require('jsonwebtoken');
const { createUser, getUser } = require('./db');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Secret key for JWT
const SECRET_KEY = 'your_secret_key';

// Basic route
app.get('/', (req, res) => {
  res.send('Here I am your first running API!');
});

// Register route
app.post('/register', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json({ message: 'User created', user });
  } catch (error) {
    res.status(400).json({ message: 'Error creating user', error });
  }
});

// Login route
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await getUser(email);
    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ message: 'Login successful', token });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
