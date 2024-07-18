const mongoose = require('mongoose');
const User = require('./model');

// MongoDB connection
mongoose.connect('mongodb://mongo:27017/mern-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Methods for user operations
const createUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const getUser = async (email) => {
  return await User.findOne({ email });
};

const getAllUsers = async () => {
  return await User.find();
};

const deleteUser = async (email) => {
  return await User.deleteOne({ email });
};

module.exports = { createUser, getUser, getAllUsers, deleteUser };
