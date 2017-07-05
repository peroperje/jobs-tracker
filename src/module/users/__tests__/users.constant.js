import * as uCosnt from '../users.constant';

describe('Users constants', () => {

  describe('SIGNUP CONST', () => {
    it('Constant FETCH_SIGNUP_REQUEST should be defined', () => {
      expect(uCosnt.FETCH_SIGNUP_REQUEST).toBeDefined();
    });

    it('Constant FETCH_SIGNUP_SUCCESS should be defined', () => {
      expect(uCosnt.FETCH_SIGNUP_SUCCESS).toBeDefined();
    });


  });
  describe('LOGIN CONSTANT', () => {

    it('Constant FETCH_LOGIN_REQUEST should be defined', () => {
      expect(uCosnt.FETCH_LOGIN_REQUEST).toBeDefined();
    });

    it('Constant FETCH_LOGIN_SUCCESS should be defined', () => {
      expect(uCosnt.FETCH_LOGIN_SUCCESS).toBeDefined();
    });

  });
  describe('Fetch Failure', () => {

    it('Constant FETCH_FAILURE should be defined', () => {
      expect(uCosnt.FETCH_FAILURE).toBeDefined();
    });

  });
  describe('Check is logged constants', () => {

    it('Should be defined CHECK_IS_LOGGED_REQUEST', () => {
      expect(uCosnt.CHECK_IS_LOGGED_REQUEST).toBeDefined();
    });

    it('Should defined CHECK_IS_LOGGED_SUCCESS', () => {
      expect(uCosnt.CHECK_IS_LOGGED_SUCCESS).toBeDefined();
    });

    it('Should be defined CLEAR_FETCH_FAILURE_ERROR', () => {
      expect(uCosnt.CLEAR_FETCH_FAILURE_ERROR).toBeDefined();
    });

    it('Should has defined LOGOUT', () => {
      expect(uCosnt.LOGOUT).toBeDefined();
    });

  });

});
