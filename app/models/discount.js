'use strict'
const mongoose = require('./../config/mongoose')
var Schema = mongoose.Schema;

var DiscountSchema = Schema({
    brand: String,
    threshold: Number,
    discount: Number
});

module.exports = mongoose.model('Discount', DiscountSchema);
