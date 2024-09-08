// controllers/orderController.js
const Order = require('.../models/Order');
const Product = require('.../models/Product');

exports.createOrder = async (req, res) => {
  try {
    const product = await Product.findByPk(req.body.productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const order = await Order.create({
      productId: product.id,
      buyerId: req.user.id,
      sellerId: product.userId,
      status: 'pending',
    });
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json({ message: 'Order creation failed', error: error.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  const orders = await Order.findAll({ where: { buyerId: req.user.id } });
  res.json(orders);
};

exports.updateOrderStatus = async (req, res) => {
  const order = await Order.findByPk(req.params.id);
  if (!order || order.sellerId !== req.user.id)
    return res.status(404).json({ message: 'Order not found or unauthorized' });

  await order.update({ status: req.body.status });
  res.json(order);
};
