// routes/orderRoutes.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/', verifyToken, orderController.createOrder);
router.get('/', verifyToken, orderController.getOrdersByUser);
router.put('/:id', verifyToken, orderController.updateOrderStatus);

module.exports = router;
