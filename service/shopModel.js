const { model, Schema } = require('mongoose');

const productSchema = new Schema ({
	productId: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	imageURL: {
		type: String
	}
});

const shopSchema = new Schema({
	id: {
		type: String
	},
	shopName: {
		type: String,
		required: true
	},
	products: [productSchema]
});

const Shop = model('shops-products', shopSchema);

module.exports = Shop;