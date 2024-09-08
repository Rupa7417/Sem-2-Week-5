// user.js
const client = require('../config/config'); // Import the database client

// Function to get all users from the demotable
const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    // Query to select all rows from demotable
    client.query('SELECT * FROM demotable', (err, res) => {
      if (err) {
        reject(err); // If there's an error, reject the promise
      } else {
        resolve(res.rows); // Otherwise, resolve with the rows
      }
    });
  });
};

// Export the function for use in the router
module.exports = { getAllUsers };