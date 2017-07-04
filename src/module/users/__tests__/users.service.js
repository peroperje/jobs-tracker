jest.mock('../../../service/request');
import {login, signup, me} from '../users.service';

describe('Login', () => {
  it('Should call request success', (done) => {
    const data = {email: 'rope@ptt.yu', password: '4546'};
    login(data).then((res) => {
      expect(res.data).toEqual({
        url: 'users/login',
        method: 'POST',
        data: data
      });
      done();
    });
  });
  describe('SignUp', () => {
    it('Should call signup success', () => {
      const data = {
        email: 'peroperje@wawa.com',
        firstName: 'petar',
        surName: 'bot',
        password: '46545665'
      };
      signup(data).then((res) => {
        expect(res).toEqual({
          url: 'users/',
          method: 'POST',
          data: data
        });
      });

    });
  });
  describe('Me', () => {
    it('Should call me route', (done) => {
      me()
        .then((res) => {
          expect(res.data).toEqual({
            url: 'users/me',
            method: 'POST'
          });
          done();
        });
    });

  });
});
