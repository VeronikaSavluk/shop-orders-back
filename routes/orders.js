const express = require('express');
const {orders: ctrl} = require('../controllers');

const router = express.Router();

router.post('/history', ctrl.getAllOrders);
router.post('/shopping-cart', ctrl.postNewOrder);

module.exports = router;