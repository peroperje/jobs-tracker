import * as uCosnt from '../users.constant';

describe('Test users constants', () => {

  it('Constant FETCH_SIGNUP_REQUSET should be defined', () => {
    expect(uCosnt.FETCH_SIGNUP_REQUSET).toBeDefined();
  });

  it('Constant FETCH_SIGNUP_SUCCESS should be defined', () => {
    expect(uCosnt.FETCH_SIGNUP_SUCCESS).toBeDefined();
  });

  it('Constant FETCH_SIGNUP_FAILURE should be defined', () => {
    expect(uCosnt.FETCH_SIGNUP_FAILURE).toBeDefined();
  });

});
