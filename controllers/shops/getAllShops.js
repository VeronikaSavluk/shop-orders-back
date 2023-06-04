const Shop = require('../../service/shopModel');

const getAllShops = async (req, res, next) => {
	try {
		const allShops = await Shop.find();

	res.status(200).json({
			allShops
	});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = getAllShops;