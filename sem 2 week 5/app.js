// app.js
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/database');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/auth', authRoutes);
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/payments', paymentRoutes);

// Sync models and start server
sequelize
  .sync()
  .then(() => {
    app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
