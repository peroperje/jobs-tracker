jest.mock('../../../store/jwtStorage');
import {isLogged, errorFetchingUser, shouldCheckIsLogged} from '../users.selector';

describe('User selector', () => {

  describe('isLogged selector', () => {

    it('Should return that user logged', () => {

      const state = {
        user: {
          _id: '121212'
        }
      };

      expect(isLogged(state)).toBeTruthy();

    });

    it('Should return that user is not loggedd', () => {
      const state = {
        user: {
          _id: null
        }
      }
      expect(isLogged(state)).toBeFalsy();
    });

  });

  describe('shouldCheckIsLogged selector', () => {

    it('Should check is user logged', () => {

      const state = {
        user: {
          _id: null
        }
      };
      expect(shouldCheckIsLogged(state)).toBeTruthy();

    });

    it('Should not check is user logged', () => {

      const state = {
        user: {
          _id: '4454656565'
        }
      };
      expect(shouldCheckIsLogged(state)).toBeFalsy();

    });

  });

  describe('User error fetching', () => {

    it('Should error message exist', () => {

      const state = {
        user: {errorFetching: 'Some error'}
      };
      expect(errorFetchingUser(state)).toBe(state.user.errorFetching);

    });

    it('Should error message be null', () => {
      const state = {
        user: {
          errorFetchingUser: null
        }
      };
      expect(errorFetchingUser(state)).toBeNull();
    });

  });

});