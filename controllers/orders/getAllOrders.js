const Cart = require('../../service/cartModel');

const getAllOrders = async (req, res, next) => {
try {
	const { email } = req.body;
	
	const orders = await Cart.find({email});

	res.status(200).json({
			orders
	});
} catch (error) {
	next(error);
}
};

module.exports = getAllOrders;