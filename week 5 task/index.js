const express = require('express'); // Import Express framework
const client = require('./src/config/config'); // Import database client from config.js
const userRouter = require('./src/routes/userRouter'); // Import the user router

const app = express(); // Initialize Express
const PORT = 3000; // Define the server port

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user router for routes starting with /users
app.use('/users', userRouter);

// Connect to the database
client.connect()
  .then(async () => {
    console.log("Connected to the database");

    // Query to fetch and display table data from 'demotable'
    try {
      const result = await client.query('SELECT * FROM demotable'); // Adjust the table name if needed
      console.log("Table Data:", result.rows); // Display the fetched rows in the terminal
    } catch (err) {
      console.error("Error fetching table data:", err.message);
    }
  })
  .catch((err) => console.error("Connection error", err.stack));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});