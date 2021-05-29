// const config = require('../../config/index');

// Models
const Product = require('./../../models/product');
const Discount = require('./../../models/discount');

const moduleName = 'ProductController';

class ProductController  {

  getProducts(req, res) {
    try {
      Product.find({}).exec((err, products) => {

        if(err) {
          return res.status(500).send({ 
            message: 'error en el servidor'
          })
        } else {
          if (products) {
            return res
              .status(200)
              .json({ products })
             
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

  test(req, res){
    res.status(200).send({ message: 'test api products' })
  }

}
module.exports = ProductController;
