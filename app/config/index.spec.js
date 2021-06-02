const mockery = require('mockery');
const sinon = require('sinon');
const chai = require('chai');

const expect = chai.expect;

process.env.NODE_ENV_APP = 'lider-cl';
process.env.NODE_ENV = 'local';

describe('index config', () => {
  beforeEach(() => {
    mockery.enable({
      warnOnReplace: false,
      warnOnUnregistered: false,
      useCleanCache: true
    });
  });

  afterEach(() => {
    mockery.disable();
    mockery.deregisterAll();
  });

  describe('index', () => {
    it('should throw an exception when then config folder does not exist', () => {
      const fsMock = {
        existsSync: () => {
          if (process.env.NODE_ENV_APP === 'no-folder') {
            return false;
          }
          return true;
        }
      };
      mockery.registerMock('fs', fsMock);      
      process.env.NODE_ENV_APP = 'no-folder';

      let error = null;
      try {
        require('./index');
      } catch (err) {
        error = err;
      }
      expect(error).to.be.an('error');
      expect(error.message).to.be.equals('the folder was not found, set correctly the env variable NODE_ENV_APP');
      
    });

    it('should throw an exception when then config file does not exist', () => {
      const fsMock = {
        existsSync: (url) => {
          if (url.indexOf('other_config') >= 0) {
            return false;
          }
          return true;
        }
      };
      mockery.registerMock('fs', fsMock);
      process.env.NODE_ENV_APP = 'default';
      process.env.NODE_ENV = 'other_config';
      let error = null;
      try {
        require('./index');
      } catch (err) {
        error = err;
      }
      expect(error).to.be.an('error');
      expect(error.message).to.be.equals('the config file was not found, set correctly the env variable NODE_ENV');
    });

  });
});