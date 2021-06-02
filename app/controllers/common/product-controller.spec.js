OutcomeMock = function () {};
OutcomeMock.prototype.save = function () {};
OutcomeMock.prototype.remove = function () {};
OutcomeMock.prototype.validateSync = function () {};
OutcomeMock.find = function () {};


const mockery = require('mockery');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const modelProduct = require('./../../models/product');

const Mongoose = require('mongoose').Mongoose;
const mongoose = new Mongoose();
 
const MockMongoose = require('mock-mongoose').MockMongoose;
const mockMongoose = new MockMongoose(mongoose);

describe('ProductController', () => {
  var req;
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });

    req = {
      headers: {
        country: 'CL'
      },
      body: {
        dummy: {}
      }
    };

    mockery.registerMock('../../config/index', {
      msConfig: {
        name: 'API products mongodb',
        port: 3000,
        country: 'CL',
        commerce: 'Lider',
        timeOut: 5000,
        requireToken: false
      },
      services: {
      },
      mongoDB: {
        ip: 'localhost',
        port: 27017,
        db: 'admin'
      }
    });

    sinon.stub(modelProduct, 'find');

    mockMongoose.prepareStorage().then(function() {
      mongoose.connect('mongodb://example.com/TestingDB', function(err) {
          done(err);
      });
    });
  });

  afterEach(() => {
    sandbox.restore();
    mockery.disable();
    mockery.deregisterAll();

    //modelProduct.find.restore();
  });


  describe('product controller method', () => {

    it.skip('should expect a response of product controller testProducts', async () => {

      const ProductController = require('./product-controller');
      const controller = new ProductController();

      const req = {
      };

      const res = {
        status: (code) => {
          return {
            send: (statusCode, message, discount) => {
              expect(code).to.be.equals(200);
              return 'ok';
            }
          }
        }
      };

      const response = await controller.testProducts(req, res);
      expect(response).to.be.equal( 'ok' );
    });
  });


  it('should expect a response of product controller getProduct', () => {
    
    const ProductController = require('./product-controller');
    const controller = new ProductController();

    const responseMock = { statusCode: 200, message: 'ok', discounts: [{}] };
    const a = { name: 'a' };
    const expectedModels = [a];
    modelProduct.find.yields(null, expectedModels);
    const req = { params: { } };
    const res = {
      status: (code) => {
        return {
          send: (responseMock) => {
            expect(code).to.be.equals(200);
            expect(responseMock.statusCode).to.be.equals(200);
            expect(responseMock.message).to.be.equals('ok');
            return 'ok';
          }
        }
      }
    };
    const response =  controller.getProducts(req, res);
  });  

});


