// userRouter.js
const express = require('express'); // Import Express
const { getAllUsers } = require('../models/user'); // Import the getAllUsers function from user.js

const router = express.Router(); // Create a new router instance

// Route to get all users
router.get('/all', async (req, res) => {
  try {
    const users = await getAllUsers(); // Call the getAllUsers function
    res.json(users); // Send the result as JSON
  } catch (error) {
    res.status(500).send(error.message); // Send error message in case of failure
  }
});

// Export the router to be used in index.js
module.exports = router;