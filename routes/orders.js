const express = require('express');
const {orders: ctrl} = require('../controllers');

const router = express.Router();

router.get('/history', ctrl.getAllOrders);
router.post('/shopping-cart', ctrl.postNewOrder);

module.exports = router;