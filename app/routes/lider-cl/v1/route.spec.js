/* eslint-disable global-require */
const mockery = require('mockery');
const expect = require('chai').expect;

describe('route testing', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
    process.env.NODE_ENV = 'local';
    process.env.NODE_ENV_APP = 'lider-cl';
  });
  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  it('All the middlewares must be loaded', () => {

    const routerMock = {
      Router: () => {
        return {
          get(path, middlewares) {
            expect(middlewares.length).to.be.equal(1);
          }
        }
      }
    }

    mockery.registerMock('../../../middlewares/common/product-middleware', (req, res, next) => {});
    mockery.registerMock('express', routerMock);
    const router = require('./route');
    
  });

});