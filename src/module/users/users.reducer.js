import {
  FETCH_SIGNUP_REQUEST,
  FETCH_SIGNUP_SUCCESS,
  FETCH_LOGIN_REQUEST,
  FETCH_LOGIN_SUCCESS,
  CHECK_IS_LOGGED_REQUEST,
  CHECK_IS_LOGGED_SUCCESS,
  FETCH_FAILURE,
  CLEAR_FETCH_FAILURE_ERROR,
  LOGOUT
} from './users.constant';

/**
 * @description set state for fetching action
 * @param {Object} state state object
 * @return {Object} new state
 */
const setFetching = (state) => {
  return {
    ...state,
    ...{
      isFetching: true,
      errorFetching: null
    }
  };
};

/**
 *
 * @param {Object} state user state
 * @param {Object} payload new user data
 * @return {Object} new state
 */
const setUserData = (state, payload) => {
  return {
    ...state,
    ...{
      _id: payload._id,
      firstName: payload.firstName,
      surName: payload.surName,
      isFetching: false,
      errorFetching: null
    }
  };
};

/**
 * @description User reducer
 * @param {Object} state user object
 * @param {Object} action action
 * @return {Object}
 */
function user(state = {}, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_SIGNUP_REQUEST:
      return setFetching(state);
    case FETCH_SIGNUP_SUCCESS:
      return setUserData(state, payload);
    case FETCH_LOGIN_REQUEST:
      return setFetching(state);
    case FETCH_LOGIN_SUCCESS:
      return setUserData(state, payload);
    case CHECK_IS_LOGGED_REQUEST:
      return setFetching(setUserData(state, {
        _id: null,
        firstName: null,
        surName: null
      }));
    case CHECK_IS_LOGGED_SUCCESS:
      return setUserData(state, payload);
    case FETCH_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorFetching: payload.errorFetching
        }
      };
    case CLEAR_FETCH_FAILURE_ERROR:
      return {...state, ...{errorFetching: null}};
    case LOGOUT:
      return setUserData(state, {_id: null, firstName: null, surName: null});
    default:
      return state;
  }
}
export {
  user
};
