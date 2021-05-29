'use strict'
const mongoose = require('./../config/mongoose')
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    id: Number,
    brand: String,
    description: String,
    image: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
