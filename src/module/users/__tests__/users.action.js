import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  CHECK_IS_LOGGED_REQUEST,
  CHECK_IS_LOGGED_SUCCESS,
  FETCH_FAILURE,
  CLEAR_FETCH_FAILURE_ERROR
} from '../users.constant';
import {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchLoginRequest,
  fetchLoginSuccess,
  checkIsLoggedRequest,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError
} from '../users.action';

describe('Users Actions', () => {

  describe('Sign Up ', () => {
    describe('Fetch Sign Up', () => {

      const data = {
        firstName: 'petar',
        surName: 'Borovcain',
        email: 'rope@ptt.yu',
        password: '123456'
      };
      const action = fetchSignUp(data);

      it('Test fetch Sign Up type', () => {
        expect(action.type).toBe(FETCH_SIGNUP_REQUEST);
      });

      it('Test payload structure', () => {
        expect(action.payload.data).toBeDefined();
      });

      it('Passed parameters should be same as in playload', () => {
        expect(action.payload.data).toEqual(data);
      });

    });
    describe('Fetch Sign Up Success', () => {

      const data = {
        _id: '456465',
        firstName: 'Petar',
        surName: 'Borovcanin'
      };

      const action = fetchSignUpSuccess(data);

      it('Shoudl has same type', () => {
        expect(action.type).toBe(FETCH_SIGNUP_SUCCESS);
      });

      it('Should has _id in payload', () => {
        expect(action.payload._id).toBeDefined();
      });

      it('Should has firstName in payload', () => {
        expect(action.payload.firstName).toBeDefined();
      });

      it('Should has surName in payload', () => {
        expect(action.payload.surName).toBeDefined();
      });

      it('Should be same object in palyoad as passed as param', () => {
        expect(action.payload).toEqual(data);
      });
    });
  });

  describe('Login', () => {
    describe('Fetch Login request', () => {
      const data = {
        email: 'peroperje@fhdsa.com',
        password: '123456789'
      };
      const action = {
        type: FETCH_LOGIN_REQUEST,
        payload: data
      };
      it('Should create request action ', () => {
        expect(fetchLoginRequest(data)).toEqual(action);
      });
    });
    describe('Fetch login success', () => {
      it('should creat login success action', () => {
        const data = {
          _id: '55445',
          firstName: 'petar',
          surName: 'Borovcanin'
        };
        const action = {
          type: FETCH_LOGIN_SUCCESS,
          payload: data
        };
        expect(fetchLoginSuccess(data)).toEqual(action);
      });
    });

  });
  describe('Check is logged', () => {

    it('Should create check is logged request action', () => {
      expect(checkIsLoggedRequest()).toEqual({type: CHECK_IS_LOGGED_REQUEST});
    });

    it('Should create check is logged success action', () => {
      const userData = {
        _id: '445465',
        firstName: 'hfsdfsd',
        surName: 'hjsahdkssa',
        email: 'kasddkhaskj'
      };
      expect(checkIsLoggedSuccess(userData)).toEqual({
        type: CHECK_IS_LOGGED_SUCCESS,
        payload: userData
      });
    });
  });
  describe('Fetch failure', () => {
    it('Should create fetch failure action', () => {
      const err = 'Something is wrong';
      const action = {
        type: FETCH_FAILURE,
        payload: {
          errorFetching: err
        }
      };
      expect(fetchFailure(err)).toEqual(action);
    });
    it('Should create action for clean fetch error', () => {
      const action = cleanFetchError();
      expect(action).toEqual({type: CLEAR_FETCH_FAILURE_ERROR});
    });
  });
});
