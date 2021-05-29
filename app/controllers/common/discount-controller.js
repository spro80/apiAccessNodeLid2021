// const config = require('../../config/index');

// Models
const Discount = require('./../../models/discount');

const moduleName = 'DiscountController';

class DiscountController  {

  getDiscounts(req, res) {
    try {
      Discount.find({}).exec((err, discounts) => {

        if(err) {
          return res.status(500).send({ 
            message: 'error en el servidor'
          })
        } else {
          if (discounts) {
            return res
              .status(200)
              .json({ discounts })
             
          } else {
            return res.status(404).send({ 
              message: 'data not found 404'
            })
          }
        }
      })

    } catch( e ) {
      console.log("err:");
      console.log(e);
      return res.status(504).send({ 
        message: 'error en el servidor'
      })
    }
  }

  prueba(req, res){
    res.status(200).send({ message: 'test api discount' })
  }

}
module.exports = DiscountController;
