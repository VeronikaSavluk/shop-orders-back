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
	imageURL: {
		type: String
	},
	amount: {
		type: Number,
		default: 0
	},
	shopName: {
		type: String,
		required: true
	},
	totalPrice: {
		type: Number
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
	address: {
		type: String,
		required: true
	},
	order: [productSchema]
});

const Cart = model('orders', cartSchema);

module.exports = Cart;