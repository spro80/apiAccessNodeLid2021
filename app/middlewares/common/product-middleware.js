const ProductController = require('../../controllers/common/product-controller');

const moduleName = 'ProductMiddleware';
const method = 'ProductMiddleware';

async function ProductMiddleware(req, res, next) {
  try {
    const controller = new ProductController();
    await controller.getProducts(req,res);
    return;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports.ProductMiddleware = ProductMiddleware;
