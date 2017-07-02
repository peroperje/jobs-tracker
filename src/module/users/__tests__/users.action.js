import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  FETCH_LOGIN_FAILURE
} from '../users.constant';
import {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchSignUpFailure,
  fetchLoginRequest,
  fetchLoginSuccess,
  fetchLoginFailure
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
    describe('Fetch Sign Up Failure', () => {

      const data = 'Some error message';
      const action = fetchSignUpFailure(data);

      it('Should be same type', () => {
        expect(action.type).toBe(FETCH_SIGNUP_FAILURE);
      });

      it('Should has errorFetching property', () => {
        expect(action.payload.errorFetching).toBeDefined();
      });

      it('Should be same error message in payload as passed in param', () => {
        expect(action.payload.errorFetching).toBe(data);
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
    describe('Fetch login failure', () => {
      it('Should create login failure action', () => {
        const err = 'Something is wrong';
        const action = {
          type: FETCH_LOGIN_FAILURE,
          payload: {
            errorFetching: err
          }
        };
        expect(fetchLoginFailure(err)).toEqual(action);
      });
    });
  });
});
