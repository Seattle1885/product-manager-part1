const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title required"],
        minlength: [5, "Title must be at least 5 characters"]
    },
    price: {
        type: String,
        required: [true, "Price required"]
    },
    description: {
        type: String,
        required: [true, "Description is needed"]
    }
},{timestamps:true})

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;