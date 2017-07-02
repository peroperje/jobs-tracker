import React from 'react';
import {shallow} from 'enzyme';

import About from '../About';

describe('About component', () => {

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<About/>);
  });

  describe('Rendering', () => {
    it('Should has header', () => {
      expect(wrapper.find('h1').length).toBe(1);
    });
    it('Should contain text About page', () => {
      expect(wrapper.find('h1').text()).toBe('About page');
    });
  });
});
