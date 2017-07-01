import {call, put} from 'redux-saga/effects';

import {fetchSignUpSuccess, fetchSignUpFailure} from '../users.action';
import {signUp} from '../users.saga';
import {signup} from '../users.service';


describe('User Saga', () => {
  describe('Test saga signUp worker', () => {
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
        const returnedData = {
          _id: '45465',
          firstName: 'petar',
          surName: 'borovcanin'
        };
        const action = fetchSignUpSuccess(returnedData);
        expect(gen.next(returnedData).value).toEqual(put(action));
      });
    });

    describe('Saga signUp worker failure', () => {
      const gen = signUp({});
      const err = new Error('Cannot read property \'data\' of undefined');
      it('Should put fetch sign up failure action', () => {
        expect(gen.next().value).toEqual(put(fetchSignUpFailure(err.message)));
      });
    });
  });
});
