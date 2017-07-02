import * as uCosnt from '../users.constant';

describe('Test users constants', () => {

  describe('SIGNUP CONST', () => {
    it('Constant FETCH_SIGNUP_REQUEST should be defined', () => {
      expect(uCosnt.FETCH_SIGNUP_REQUEST).toBeDefined();
    });

    it('Constant FETCH_SIGNUP_SUCCESS should be defined', () => {
      expect(uCosnt.FETCH_SIGNUP_SUCCESS).toBeDefined();
    });

    it('Constant FETCH_SIGNUP_FAILURE should be defined', () => {
      expect(uCosnt.FETCH_SIGNUP_FAILURE).toBeDefined();
    });
  });
  describe('LOGIN CONSTANT', () => {
    it('Constant FETCH_LOGIN_REQUEST should be defined', () => {
      expect(uCosnt.FETCH_LOGIN_REQUEST).toBeDefined();
    });

    it('Constant FETCH_LOGIN_SUCCESS should be defined', () => {
      expect(uCosnt.FETCH_LOGIN_SUCCESS).toBeDefined();
    });

    it('Constant FETCH_LOGIN_FAILURE should be defined', () => {
      expect(uCosnt.FETCH_LOGIN_FAILURE).toBeDefined();
    });

  });

});
