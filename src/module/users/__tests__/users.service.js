jest.mock('../../../service/request');
import {login, signup} from '../users.service';

describe('Login', () => {
  it('Should call request success', (done) => {
    const data = {email: 'rope@ptt.yu', password: '4546'};
    login(data).then((res) => {
      expect(res).toEqual({
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
      signup(data).then((res)=>{
        expect(res).toEqual({
          url: 'users/',
          method: 'POST',
          data: data
        });
      });

    });
  });
});
