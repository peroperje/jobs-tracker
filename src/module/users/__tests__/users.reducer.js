import {user} from '../users.reducer';
import {
  fetchSignUp,
  fetchSignUpSuccess,
  fetchLoginRequest,
  fetchLoginSuccess,
  checkIsLoggedRequest,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError,
  logOut
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
  describe('User Reducer', () => {
    describe('SignUp', () => {
      describe('Test state when action is FETCH_SIGNUP_REQUEST ', () => {
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

    });
    describe('Login', () => {
      describe('Fetch Login Request', () => {

        it('Should has is Fetching true', () => {
          const initState = userState();
          const action = fetchLoginRequest({});
          const state = user(initState, action);
          expect(state.isFetching).toBeTruthy();
        });

      });
      describe('Fetch Login Success', () => {

        it('Should have user data', () => {
          const initState = userState();
          const action = {
            _id: '4445465',
            firstName: 'Petar',
            surName: 'Borovcanin'
          };
          const expectedState = userState(action);
          const state = user(initState, fetchLoginSuccess(action));
          expect(state).toEqual(expectedState);
        });

      });
    });
    describe('Check is logged', () => {

      describe('Request', () => {

        const initState = userState({
          _id: 'hkjsahkdsa',
          firstName: 'jldalda',
          surName: 'jhashdkjhkas'
        });
        const action = checkIsLoggedRequest();
        const state = user(initState, action);
        const expectedState = userState({
          isFetching: true
        });

        it('Check is logged request', () => {
          expect(state).toEqual(expectedState);
        });
        isDefined(state);
      });
      describe('Success', () => {

        const initState = userState();
        const userData = {
          _id: '5454',
          firstName: 'jhdsakdask',
          surName: 'jdhaskjah'
        };
        const action = checkIsLoggedSuccess(userData);
        const state = user(initState, action);
        const expectedData = userState(userData);

        it('Check is logged success', () => {
          expect(state).toEqual(expectedData);
        });

        isDefined(state);

      });
    });

    describe('Test state when action is FETCH_FAILURE ', () => {

      const initState = userState({
        isFetching: true
      });
      const errMessage = 'Error message';
      const action = fetchFailure(errMessage);
      const state = user(initState, action);

      it('isFetching should be false', () => {
        expect(state.isFetching).toBe(false);
      });

      it('errorFetching should has error message', () => {
        expect(state.errorFetching).toBe(errMessage);
      });

      isDefined(state);

    });

    describe('Clean Fetch Error', () => {
      it('Should clean error fetching message', () => {
        const initState = userState({errorFetching: 'Some error'});
        const action = cleanFetchError();
        const state = user(initState, action);
        const expextedState = {...initState, ...{errorFetching: null}};
        expect(state).toEqual(expextedState);
      });
    });

    describe('Logout', () => {
      it('Should reset user data', () => {

        const initState = userState({
          _id:'54545',
          firstName:'4jlkdasjlsa',
          surName:'hdjshdsasa'
        });
        const action = logOut();
        const state = user(initState, action);
        const expectedState =  userState();
        expect(state).toEqual(expectedState);
      });
    });
  });
});
