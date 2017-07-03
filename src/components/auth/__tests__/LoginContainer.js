import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import LoginContainer from '../LoginContainer';
import initStore from '../../../store/initialStore';
import {fetchLoginRequest} from '../../../module/users/users.action';

const mockStore = configureStore();

describe('Test Login Container', () => {
  let wrapper, store,propIsFetching,propHandleSubmitLogin;
  beforeEach(() => {
    store = mockStore(initStore);
    store.dispatch = jest.fn();
    wrapper = shallow(<LoginContainer store={store}/>);
    propIsFetching = wrapper.prop('isFetching');
    propHandleSubmitLogin = wrapper.prop('handleSubmitLogin');
  });

  describe('Test isFetching property', () => {

    it('Should be defined', () => {
      expect(propIsFetching).toBeDefined();
    });

    it('isFetching should has false value', () => {
      expect(propIsFetching).toBeFalsy();
    });
  });

  describe('Test handleSubmitLogin property', () => {

    it('Should be defined ', () => {
      expect(propHandleSubmitLogin).toBeDefined();
    });
    it('Should dispatch action', () => {
      const data = {email: 'perope@yaho.com', password: '456546'};
      const action = fetchLoginRequest(data);
      propHandleSubmitLogin(data);
      expect(store.dispatch).toBeCalledWith(action);
    });
  });
});
