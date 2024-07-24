const express = require('express');
const connectDB = require('./db'); // Import the database connection

const app = express();
const port = 5000;

// Basic route
app.get('/', (req, res) => {
  res.send('Here I am your first running API!'); // <<< this line has been modified for testing purposes
});

// Connect to MongoDB
connectDB();
// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/profiles', require('./routes/profiles'));

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
