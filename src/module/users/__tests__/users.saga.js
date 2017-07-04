jest.mock('../../../store/jwtStorage');
import {delay} from 'redux-saga';
import {call, put} from 'redux-saga/effects';

import {fetchSignUpSuccess, fetchLoginSuccess, fetchFailure} from '../users.action';
import {signUp, logIn} from '../users.saga';
import {signup, login} from '../users.service';


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
    describe('Saga signUp worker success ', () => {
      const gen = signUp(action);
      it('Should call signup service', () => {
        expect(gen.next().value).toEqual(call(signup, action.payload.data));
      });

      it('Should put Fetch SignUp action', () => {
        const res = {
          data: {
            _id: '45465',
            firstName: 'petar',
            surName: 'borovcanin'
          }
        };
        const action = fetchSignUpSuccess(res.data);
        expect(gen.next(res).value).toEqual(put(action));
      });
    });

    describe('Saga signUp worker failure', () => {

      it('Should put fetch sign up failure action', () => {
        const gen = signUp({});
        const err = new Error('Server error');
        expect(gen.next().value).toEqual(put(fetchFailure(err.message)));
      });

    });
  });
  describe('Login', () => {
    describe('Saga login worker success', () => {
      const action = {
        payload: {
          email: 'rope@ptt.yu',
          password: '45546465'
        }
      };
      const gen = logIn(action);
      it('Should call login service success', () => {
        expect(gen.next().value).toEqual(call(login, action.payload));
      });
      it('Should dispatch success action', () => {
        const res = {
          data: {
            _id: '45465',
            firstName: 'petar',
            surName: 'borovcanin'
          }
        };
        //expect(gen.next(res).value).toEqual(put(fetchLoginSuccess(res.data)));
      });
    });
    describe('Saga login worker failure', () => {
      it('Should dispatch failure action', () => {
        const gen = logIn();
        const err = 'Server error';
        //expect(gen.next().value).toEqual(put(fetchFailure(err)));
      });
    });
  });
});
