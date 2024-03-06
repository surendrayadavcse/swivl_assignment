// routes/userRoutes.js

const express = require('express');
const User = require('../models/User');
const router = express();
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
const verifyToken = require('../verifytoken');
// Route for user registration.

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});




// Route for user login

  // Implementation for user login
  router.post('/login', async (req, res) => {
    try {
      const { email, password } = req.body;
  
      // Find user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
  
      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, 'surendra');
  
      // Send token in response
      res.status(200).json({ token });
    } catch (error) {
      console.error('Error logging in:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });


// Route for user profile management
// Route for user profile management
router.put('/:userId',verifyToken, async (req, res) => {
    try {
      const userId = req.params.userId;
      const { username, email, password } = req.body;
  
      // Find the user by userId
      let user = await User.findById(userId);
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // Update user's profile information
      if (username) user.username = username;
      if (email) user.email = email;
      if (password) {
        // Hash the new password
        const hashedPassword = await bcrypt.hash(password, 10);
        user.password = hashedPassword;
      }
  
      // Save the updated user to the database
      await user.save();
  
      res.status(200).json({ message: 'User profile updated successfully' });
    } catch (error) {
      console.error('Error updating user profile:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  

module.exports = router;
