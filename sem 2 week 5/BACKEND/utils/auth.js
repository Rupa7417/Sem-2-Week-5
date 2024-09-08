// utils/auth.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('.../models/User');

exports.generateToken = (user) => {
  return jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

exports.authenticate = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  if (user && (await bcrypt.compare(password, user.password))) {
    return user;
  }
  throw new Error('Invalid credentials');
};
