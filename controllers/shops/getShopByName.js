const Shop = require('../../service/shopModel');

const getShopByName = async (req, res, next) => {
	try {
		const { shopName } = await req.params;
		
		const shop = await Shop.find({shopName});

	res.status(200).json({
			shop
	});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = getShopByName;