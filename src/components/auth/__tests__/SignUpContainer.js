import React from 'react';
import {shallow} from 'enzyme';
import configureStore from 'redux-mock-store';

import SignUpContainer from '../SignUpContainer';
import initStore from '../../../store/initialStore';
import {fetchSignUp} from '../../../module/users/users.action';

const mockStore = configureStore();

describe('Test SignUpContainer', () => {

  let wrapper, store;

  beforeEach(() => {
    store = mockStore(initStore);
    store.dispatch = jest.fn();
    wrapper = shallow(<SignUpContainer store={store}/>);
  });

  describe('Test isFetching property ', () => {
    it('Should has isFetching props ', () => {
      expect(wrapper.prop('isFetching')).toBeDefined();
    });

    it('isFetching property should be false', () => {
      expect(wrapper.props('isFetching').value).toBeFalsy();
    });

  });

  describe('Test handleSubmitSingUp property', () => {

    it('Should has handleSubmitSingUp props', () => {
      expect(wrapper.prop('handleSubmitSingUp')).toBeDefined();
    });

    it('handleSubmitSingUp property should be function', () => {
      expect(wrapper.prop('handleSubmitSingUp').value).toBe(wrapper.instance().handleSubmitSingUp);
    });

    it('Should handleSubmitSingUp dispatch action', () => {
      const data = {email:'peroperje@ta.com'};
      const action = fetchSignUp(data);
      wrapper.prop('handleSubmitSingUp')(data);
      expect(store.dispatch).toBeCalledWith(action);
    });
  });
});