const { model, Schema } = require('mongoose');

const productSchema = new Schema ({
	title: {
		type: String,
		required: true
	},
	price: {
		type: Number,
		required: true
	},
	amount: {
		type: Number,
		default: 0
	},
	imageURL: {
		type: String
	},
	shopName: {
		type: String,
		required: true
	}
});

const cartSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	phone: {
		type: String,
		required: true
	},
	orders: [productSchema]
});

const Cart = model('orders', cartSchema);

module.exports = Cart;