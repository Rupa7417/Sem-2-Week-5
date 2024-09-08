// config.js
const { Client } = require('pg');

// Database configuration
const client = new Client({
  host: "localhost",
  user: "postgres",
  port: 3000,
  password: "Bhavya20",
  database: "demopost",
});

// Export the client for use in other modules
module.exports = client;