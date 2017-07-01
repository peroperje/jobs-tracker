import {user} from '../users.reducer';
import {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchSignUpFailure
} from '../users.action';

describe('User Reducer', () => {

  /**
   * @description set initial state
   * @param {Object} overwritte overwritte initial state
   * @return {Object} initial state object
   */
  const userState = (overwritte = {}) => ({
    ...{
      _id: null,
      firstName: null,
      surName: null,
      isFetching: false,
      errorFetching: null
    },
    ...overwritte
  });

  /**
   * @description check structure of state object
   * @param {Object} obj state object
   */
  const isDefined = function (obj) {
    const isIdDefined = (obj) => {
      it('Should be _id defined', () => {
        expect(obj._id).toBeDefined();
      });
    };

    const isFirstNameDefined = (obj) => {
      it('Should be firstName defined', () => {
        expect(obj.firstName).toBeDefined();
      });
    };

    const isSurNameDefined = (obj) => {
      it('Should be surName defined', () => {
        expect(obj.surName).toBeDefined();
      });
    };

    const isIsFetchingDefined = (obj) => {
      it('Should be isFetching defined', () => {
        expect(obj.isFetching).toBeDefined();
      });
    };

    const isErrorFetchingDefined = (obj) => {
      it('Should be errorFetching defined', () => {
        expect(obj.errorFetching).toBeDefined();
      });
    };

    isIdDefined(obj);
    isFirstNameDefined(obj);
    isSurNameDefined(obj);
    isIsFetchingDefined(obj);
    isErrorFetchingDefined(obj);
  };

  describe('Test state when action is FETCH_SIGNUP_REQUSET ', () => {
    const initState = userState();
    const action = fetchSignUp({});
    const state = user(initState, action);

    it('Value of isFetching property should be  true', () => {
      expect(state.isFetching).toBe(true);
    });

    it('Value of errorFetching should be null ', () => {
      expect(state.errorFetching).toBe(null);
    });
    // check structure of state object after tests
    isDefined(state);


  });

  describe('Test state when action is FETCH_SIGNUP_SUCCESS ', () => {

    const initSate = userState({
      isFetching: true,
      errorFetching: 'some error'
    });
    const fetchedData = {
      _id: '123456',
      firstName: 'petar',
      surName: 'borovcanin'
    };
    const action = fetchSignUpSuccess(fetchedData);
    const state = user(initSate, action);

    it('State _id should be as payload _id', () => {
      expect(state._id).toBe(action.payload._id);
    });

    it('State firstName should be as payload firstName', () => {
      expect(state.firstName).toBe(action.payload.firstName);
    });

    it('State surName should be same as payload surName', () => {
      expect(state.surName).toBe(action.payload.surName);
    });

    it('State isFetching should be false', () => {
      expect(state.isFetching).toBe(false);
    });

    it('State errorFetching should be null', () => {
      expect(state.errorFetching).toBe(null);
    });

    isDefined(state);
  });

  describe('Test state when action is FETCH_SIGNUP_FAILURE ', () => {
    const initState = userState({
      isFetching: true
    });
    const errMessage = 'Error message';
    const action = fetchSignUpFailure(errMessage);
    const state = user(initState, action);
    it('isFetching should be false', () => {
      expect(state.isFetching).toBe(false);
    });

    it('errorFetching should has error message', () => {
      expect(state.errorFetching).toBe(errMessage);
    });

    isDefined(state);
  });
});
