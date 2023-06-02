const express = require('express');
const {shops: ctrl} = require('../controllers');

const router = express.Router();

router.get('/', ctrl.getAllShops);
router.get('/:shopName', ctrl.getShopByName);
module.exports = router;