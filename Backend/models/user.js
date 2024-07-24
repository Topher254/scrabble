const mongoose = require('mongoose');
const validator = require('validator'); // For email validation

// User schema with validation
const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true, // Ensure unique usernames
    trim: true,
    minlength: 3 // Minimum length for username
  },
  email: {
    type: String,
    required: true,
    unique: true, // Ensure unique emails
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Invalid email format');
      }
    }
  },
  password: {
    type: String,
    required: true,
    minlength: 6 // Minimum length for password
  }
}, {
  timestamps: true // Automatically add createdAt and updatedAt fields
});

// Create a User model
const User = mongoose.model('User', userSchema);

module.exports = User;
