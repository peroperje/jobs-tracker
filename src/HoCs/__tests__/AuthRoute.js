import React from 'react';
import {BrowserRouter, Redirect} from 'react-router-dom';
import {shallow, mount} from 'enzyme';

import AuthRoute from '../AuthRoute';
import About from '../../components/static/About';

describe('AuthRoute', () => {
  describe('Rendering', () => {
    it('Should render About', () => {
      const wrapper = mount(
        <BrowserRouter>
          <AuthRoute
            component={About}
            access={true}
            redirectTo="/signup"
          />
        </BrowserRouter>
      );
      expect(wrapper.find(About).exists()).toBeTruthy();
    });
    it('Should render Redirect', () => {
      const wrapper = mount(
        <BrowserRouter>
          <AuthRoute
            component={About}
            access={false}
            redirectTo="/signup"
          />
        </BrowserRouter>
      );
      expect(wrapper.find(Redirect).exists()).toBeTruthy();
    });
  });
});
