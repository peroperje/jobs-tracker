jest.mock('../../../store/jwtStorage');
import jwtStorage from '../../../store/jwtStorage';
import {delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {
  fetchSignUpSuccess,
  fetchLoginSuccess,
  checkIsLoggedSuccess,
  fetchFailure,
  cleanFetchError
} from '../users.action';
import {cleanJobsState} from '../../jobs/jobs.action';
import {signUp, logIn, isLogged, logout} from '../users.saga';
import {signup, login, me} from '../users.service';


describe('User Saga', () => {

  describe('SignUp', () => {

    const action = {
      payload: {
        data: {
          email: 'rope@ptt.ty',
          firstName: 'petar',
          surName: 'borovcanin',
          password: '12345679'
        }
      }
    };
    const res = {
      response: {
        headers: {
          'x-auth': '564564132121'
        },
        data: {
          _id: '45465',
          firstName: 'petar',
          surName: 'borovcanin'
        }
      }
    };

    describe('Saga signUp worker success ', () => {

      const gen = signUp(action);

      it('Should call signup service', () => {

        const expected = gen.next(res).value;
        const received = call(signup, action.payload.data);
        expect(expected).toEqual(received);
      });

      it('Should put Fetch SignUp action', () => {

        const action = fetchSignUpSuccess(res.response.data);
        expect(gen.next(res).value).toEqual(put(action));
      });

    });

    describe('Saga signUp worker failure', () => {

      const gen = signUp(action);
      const err = {error: {data: 'opps'}};

      it('Should put fetch sign up failure action', () => {
        gen.next(err);
        expect(gen.next(err).value).toEqual(put(fetchFailure(err.error.data)));
      });

      it('Should wait 4s before clear data', () => {

        const expected = gen.next().value;
        const recived = call(delay, 4000);

        expect(expected).toEqual(recived);
      });

      it('Should clear fetch error message', () => {
        expect(gen.next().value).toEqual(put(cleanFetchError()));
      });

    });

  });

  describe('Login', () => {

    const action = {
      payload: {
        email: 'rope@ptt.yu',
        password: '45546465'
      }
    };

    describe('Saga login worker success', () => {

      const gen = logIn(action);
      const res = {
        response: {
          headers: {
            'x-auth': '564564132121'
          },
          data: {
            _id: '45465',
            firstName: 'petar',
            surName: 'borovcanin'
          }
        }
      };

      it('Should call login service success', () => {
        expect(gen.next(res).value).toEqual(call(login, action.payload));
      });

      it('Should set jwt token', () => {
        expect(gen.next(res).value)
          .toEqual(
            call(jwtStorage.setJWT, res.response.headers['x-auth'])
          );
      });

      it('Should dispatch success action', () => {
        expect(gen.next(res).value).toEqual(put(fetchLoginSuccess(res.response.data)));
      });

    });

    describe('Saga login worker failure', () => {

      const gen = logIn(action);
      const err = {error: {data: 'email do not exist'}};
      gen.next(err);

      it('Should dispatch failure action', () => {
        expect(gen.next(err).value).toEqual(put(fetchFailure(err.error.data)));
      });

      it('Should wait 4 s before cean error message', () => {
        expect(gen.next().value).toEqual(call(delay, 4000));
      });

      it('Should clean error message', () => {
        expect(gen.next().value).toEqual(put(cleanFetchError()));
      });

    });

  });

  describe('IsLogged', () => {

    describe('IsLogged success', () => {

      const gen = isLogged();
      const res = {
        response: {
          headers: {
            'x-auth': '564564132121'
          },
          data: {
            _id: '45465',
            firstName: 'petar',
            surName: 'borovcanin'
          }
        }
      };

      it('Call me api', () => {
        expect(gen.next(res).value).toEqual(call(me));
      });

      it('Should emit success action', () => {
        expect(gen.next(res).value).toEqual(put(checkIsLoggedSuccess(res.response.data)));
      });

    });

    describe('isLogged fail', () => {

      const gen = isLogged();
      const err = {error: {data: 'User is not logged'}};
      gen.next(err);

      it('Should emit action for fail', () => {
        expect(gen.next(err).value).toEqual(put(fetchFailure(err.error.data)));
      });

      it('Should wait 4s before clean fetch error message', () => {
        expect(gen.next().value).toEqual(call(delay, 4000));
      });

      it('Shoud emit action for clear fetch error message', () => {
        expect(gen.next().value).toEqual(put(cleanFetchError()));
      });

    });

  });

  describe('Logout', () => {

    const gen = logout();

    it('Should clear jwt token form localstorage', () => {
      expect(gen.next().value).toEqual(call(jwtStorage.removeJWT));
    });

    it('Should emit action for clean jobs state', () => {
      expect(gen.next().value).toEqual(put(cleanJobsState()));
    });

  });

});
