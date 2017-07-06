import {createSelector} from 'reselect';

import jwtStorage from '../../store/jwtStorage';

const userData = state => state.user;

/**
 * @description check is user logged
 * @return {Boolean}
 */
export const isLogged = createSelector(userData, user => !!(user._id && jwtStorage.exists()));

/**
 * @description decides should check is user logged
 * @return {Boolean}
 */
export const shouldCheckIsLogged = createSelector(userData, user => !!(!user._id && jwtStorage.exists()));

/**
 * @description return fetching user error or null
 * @return {String || Boolean}
 */
export const errorFetchingUser = createSelector(userData, user => user.errorFetching || false);
