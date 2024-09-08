// controllers/productController.js
const Product = require('.../models/Product');

exports.createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, userId: req.user.id });
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ message: 'Product creation failed', error: error.message });
  }
};

exports.getAllProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.getProductById = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.updateProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product || product.userId !== req.user.id)
    return res.status(404).json({ message: 'Product not found or unauthorized' });

  await product.update(req.body);
  res.json(product);
};

exports.deleteProduct = async (req, res) => {
  const product = await Product.findByPk(req.params.id);
  if (!product || product.userId !== req.user.id)
    return res.status(404).json({ message: 'Product not found or unauthorized' });

  await product.destroy();
  res.json({ message: 'Product deleted successfully' });
};
