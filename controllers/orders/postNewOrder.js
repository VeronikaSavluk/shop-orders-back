const Cart = require('../../service/cartModel');

const postNewOrder = async (req, res, next) => {
	try {
		console.log(req.body)
		const newOrder = await Cart.create({...req.body});

		res.json({
			status: 'success',
			code: 201,
			data: {
				newOrder,
			}
		});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = postNewOrder;