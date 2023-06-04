const Cart = require('../../service/cartModel');

const getAllOrders = async (req, res, next) => {
try {
	const { email } = req.body;
	
	const allOrders = await Cart.find({email});

	res.status(200).json({
			allOrders
	});
} catch (error) {
	next(error);
}
};

module.exports = getAllOrders;