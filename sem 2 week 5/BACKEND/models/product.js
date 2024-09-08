// models/Product.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../User');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  userId: { type: DataTypes.UUID, allowNull: false },
});

Product.belongsTo(User, { foreignKey: 'userId', as: 'seller' });

module.exports = Product;
