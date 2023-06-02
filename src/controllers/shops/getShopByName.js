const Shop = require('../../service/shopModel');

const getShopByName = async (req, res, next) => {
	try {
		const { shopName } = await req.params;
		
		const shop = await Shop.find({shopName});

	res.json({
		status: 'success',
		code: 200,
		data: {
			shop
		},
	});
	} catch (error) {
		next(error);
	}
	};
	
	module.exports = getShopByName;