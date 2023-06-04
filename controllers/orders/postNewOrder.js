const Cart = require('../../service/cartModel');

const postNewOrder = async (req, res, next) => {
	try {
		
		const newOrder = await Cart.create({...req.body});

		res.status(201).json({
				newOrder
		});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = postNewOrder;