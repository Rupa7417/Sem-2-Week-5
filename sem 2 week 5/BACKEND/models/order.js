// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('../User');
const Product = require('../Product');

const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  productId: { type: DataTypes.UUID, allowNull: false },
  buyerId: { type: DataTypes.UUID, allowNull: false },
  sellerId: { type: DataTypes.UUID, allowNull: false },
  status: { type: DataTypes.STRING, defaultValue: 'pending' },
});

Order.belongsTo(User, { foreignKey: 'buyerId', as: 'buyer' });
Order.belongsTo(User, { foreignKey: 'sellerId', as: 'seller' });
Order.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

module.exports = Order;
