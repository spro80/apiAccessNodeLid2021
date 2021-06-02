OutcomeMock = function () {};
OutcomeMock.prototype.save = function () {};
OutcomeMock.prototype.remove = function () {};
OutcomeMock.prototype.validateSync = function () {};
OutcomeMock.find = function () {};

const mockery = require('mockery');
const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const modelDiscount = require('./../../models/discount');

var Mongoose = require('mongoose').Mongoose;
var mongoose = new Mongoose();
 
var MockMongoose = require('mock-mongoose').MockMongoose;
var mockMongoose = new MockMongoose(mongoose);


describe('DiscountController', () => {
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

    sinon.stub(modelDiscount, 'find');

    mockMongoose.prepareStorage().then(function() {
      mongoose.connect('mongodb://example.com/testingdb', function(err) {
          done(err);
      });
    });

  });

  afterEach(() => {
    sandbox.restore();
    mockery.disable();
    mockery.deregisterAll();

    //modelDiscount.find.restore();
  });



  describe('executeService method', () => {

    it.skip('should expect a response of discount controller testDiscount', async () => {

      const DiscountController = require('./discount-controller');
      const controller = new DiscountController();

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

      const response = await controller.testDiscount(req, res);
      expect(response).to.be.equal( 'ok' );
    });
  });


  it('should expect a response of discount controller getDiscounts', async () => {
 
    const DiscountController = require('./discount-controller');
    const controller = new DiscountController();

    //Are 9 elements in query to Discount
    const responseMock = { statusCode: 200, message: 'ok', discounts: [] };

    const a = { name: 'a' };
    const expectedModels = [a];
    modelDiscount.find.yields(null, expectedModels);
    const req = { params: { } };
    const res = {
      status: (code) => {
        return {
          send: (responseMock) => {
            expect(code).to.be.equals(200);
            expect(responseMock.statusCode).to.be.equals(200);
            expect(responseMock.message).to.be.equals('ok');
            expect(responseMock.discounts.length).to.be.equals( 9 );
            return 'ok';
          }
        }
      }
    };
    const response = await controller.getDiscounts(req, res);
  });

});


