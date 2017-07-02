import React from 'react';
import {shallow} from 'enzyme';
import {Link, MemoryRouter} from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';

import Home from '../Home';

describe('Home component', () => {

  const wrapper = shallow(<Home/>);

  describe('Rendering', () => {
    it('Should contain div with class Home', () => {
      expect(wrapper.find('.Home').length).toBe(1);
    });

    describe('Title', () => {

      const element = wrapper.find('h3');

      it('Should exist h3 element', () => {
        expect(element.length).toBe(1);
      });

      it('Should h3 element contain text', () => {
        expect(element
          .text())
          .toBe('A simple application for tracking your activity in a job quest');
      });
    });

    describe('Test button "Get Started" ', () => {
      const LinkElement = wrapper.find(Link);
      describe('Rendering', () => {

        const ButtonElement = wrapper.find(RaisedButton);

        it('Should contains Link component', () => {
          expect(LinkElement.length).toBe(1);
        });

        it('Link to prperty should be /login', () => {
          expect(wrapper.find({to: '/login'})).toEqual(LinkElement);
        });

        it('Should contain RaisedButton', () => {
          expect(ButtonElement.exists()).toBeTruthy();
        });

        it('RaisedButton should has properties label and secondary', () => {
          expect(
            wrapper.find({
              label: 'Get Started',
              secondary: true
            }))
            .toEqual(ButtonElement);
        });
      });
    });

  });
});
