const Shop = require('../../service/shopModel');

const getAllShops = async (req, res, next) => {
	try {
		const allShops = await Shop.find();

	res.json({
		status: 'success',
		code: 200,
		data: {
			allShops
		},
	});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = getAllShops;