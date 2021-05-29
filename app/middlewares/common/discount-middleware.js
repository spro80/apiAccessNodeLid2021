const DiscountController = require('../../controllers/common/discount-controller');

const moduleName = 'DiscountMiddleware';
const method = 'DiscountMiddleware';

async function DiscountMiddleware(req, res, next) {
  try {
    const controller = new DiscountController();
    controller.getDiscounts(req,res);
    return;
  } catch (e) {
    console.log(e.message);
  }
}

module.exports.DiscountMiddleware = DiscountMiddleware;
