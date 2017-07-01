import {
  FETCH_SIGNUP_REQUSET,
  FETCH_SIGNUP_SUCCESS,
  FETCH_SIGNUP_FAILURE
} from './users.constant';

/**
 * @description User reducer
 * @param {Object} state user object
 * @param {Object} action action
 * @return {Object}
 */
function user(state = {}, action) {
  const {type, payload} = action;
  switch (type) {
    case FETCH_SIGNUP_REQUSET:
      return {
        ...state,
        ...{
          isFetching: true,
          errorFetching: null
        }
      };
    case FETCH_SIGNUP_SUCCESS:
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
    case FETCH_SIGNUP_FAILURE:
      return {
        ...state,
        ...{
          isFetching: false,
          errorFetching: payload.errorFetching
        }
      };
    default:
      return state;
  }

}

export {
  user
};
