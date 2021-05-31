// const config = require('../../config/index');
const Product = require('./../../models/product');

class ProductController  {

  async getProducts(req, res) {

    try {
      await Product.find({}).exec((err, products) => {

        if(err) {

          return res.status(500).send({ 
            statusCode: 500, message: 'err: internal error server', products: []
          })

        } else {
          if (products) {

            return res
              .status(200)
              .json({ statusCode: 200, message: 'ok', products })

          } else {

            return res.status(404).send({
              statusCode: 404, message: 'products not found', products: []
            })

          }
        }
      })

    } catch( e ) {

      return res.status(500).send({ 
        statusCode: 500, message: e.message, products: []
      })

    }
  }

  testProducts(req, res){

    return res.status(200).send({ 
      statusCode: 200, message: 'test product ok', discounts: []
    })

  }

}
module.exports = ProductController;
