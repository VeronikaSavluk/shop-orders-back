const Cart = require('../../service/cartModel');

const getAllOrders = async (req, res, next) => {
try {
	const { email } = req.body;
	
	const allOrders = await Cart.find({email});

	res.json({
		status: 'success',
		code: 200,
		data: {
			allOrders
		},
	});
} catch (error) {
	next(error);
}
};

module.exports = getAllOrders;