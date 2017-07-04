import React from 'react';
import {shallow, mount} from 'enzyme';

import FormHeader from '../FormHeader';

describe('Form Header', () => {

  const title = 'Test Title';

  describe('Rendering', () => {

    const wrapper = shallow(<FormHeader title={title}/>);

    it('Should be render', () => {
      expect(wrapper.length).toBe(1);
    });

    it('Should be defined text', () => {
      expect(wrapper.text()).toBe(title);
    });
  });
  describe('Property', () => {
    it('Should has propery', () => {
      const mounteWrapper = mount(<FormHeader title={title} />);
      expect(mounteWrapper.prop('title')).toBe(title);
    });
  });


});
