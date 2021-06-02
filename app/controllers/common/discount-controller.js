// const config = require('../../config/index');
const Discount = require('./../../models/discount');

class DiscountController  {

  getDiscounts(req, res) {
    try {
      Discount.find({}).exec((err, discounts) => {

        if(err) {

          return res.status(500).send({ 
            statusCode: 500, message: 'err: internal error server', discounts: []
          })

        } else {
          if (discounts) {

            /*return res
              .status(200)
              .json({ statusCode: 200, message: 'ok', discounts })*/
             
            return res
              .status(200)
              .send({ statusCode: 200, message: 'ok', discounts })

          } else {

            return res.status(404).send({
              statusCode: 404, message: 'discount not found', discounts: []
            })

          }
        }
      })

    } catch( e ) {

      return res.status(500).send({ 
        statusCode: 500, message: e.message, discounts: []
      })

    }
  }

  testDiscount(req, res){

    return res.status(200).send({ 
      statusCode: 200, message: 'test discount ok', discounts: []
    })

  }

}
module.exports = DiscountController;
