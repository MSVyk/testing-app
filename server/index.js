const express = require('express');
const mongoose = require('mongoose');
// const dataBase = require('./db');
const app = express();
const port = 5000;

// Middleware
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Here I am your first running APIXXX!'); // <<< this line have been modified for testing purposes
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// dataBase();
// Connect to MongoDB (replace with your MongoDB URI)
mongoose.connect('mongodb://mongo:27017/mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));
