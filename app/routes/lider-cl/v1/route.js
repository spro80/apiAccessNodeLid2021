const { Router } = require('express');

const { ProductMiddleware } = require('../../../middlewares/common/product-middleware');
const { DiscountMiddleware } = require('../../../middlewares/common/discount-middleware');

const router = Router();

const middlewaresProducts = [];
middlewaresProducts.push(ProductMiddleware);

const middlewaresDiscounts = [];
middlewaresDiscounts.push(DiscountMiddleware);

//router.get('/', middlewares);
router.get('/getProducts', middlewaresProducts);
router.get('/getDiscounts', middlewaresDiscounts);

module.exports = router;
