const express = require('express');
const connectDB = require('./db'); // Import the database connection

const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Here I am your first running API!'); // <<< this line has been modified for testing purposes
});

// Connect to MongoDB
connectDB();

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
