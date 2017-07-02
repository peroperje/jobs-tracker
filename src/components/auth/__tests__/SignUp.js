import React from 'react';
import {shallow,mount} from 'enzyme';

import {SignUp, validate} from '../SignUp';

describe('SignUp component', () => {
  const wrapper = shallow(
    <SignUp
      isFetching={false}
      handleSubmit={jest.fn()}
      handleSubmitSingUp={jest.fn()}
    />);

  describe('Form Header', () => {
    const element = wrapper.find('h2');
    describe('Rendering', () => {
      it('should exist', () => {
        expect(element.exists()).toBeTruthy();
      });
      it('should has text "SignUp"', () => {
        expect(element.text()).toBe('SignUp');
      });
    });
  });
  describe('Input fields', () => {
    const inputField = ['firstName', 'surName', 'email', 'password'];
    describe('Rendering', () => {
      inputField.forEach((name) => {
        it(`Input field ${name} should exist`, () => {
          expect(wrapper.find({name: name}).exists()).toBeTruthy();
        });
      });
    });
    describe('Validation', () => {

      /**
       * @description create Object from array property
       * @param {Function} reducer logic for object creation
       * @return {*}
       */
      const getFieldObject = (reducer) => {
        return inputField.reduce(reducer, {});
      };

      /**
       * @description create expected error object
       * @param {Function} reducer function contians logic for object creation
       * @return {*}
       */
      const getErrorObject = (reducer) => {
        return inputField.reduce(reducer, {});
      };

      it('Should empty fields fail validation', () => {
        const fields = getFieldObject((o, filed) => {
          return {...o, ...{[filed]: ''}};
        });
        const error = getErrorObject((obj, item) => {
          return {...obj, ...{[item]: 'Required'}};
        });
        expect(validate(fields)).toEqual(error);
      });
      it('Should invalid email failes validation', () => {
        const fields = getFieldObject((obj, item) => {
          return {...obj, ...{[item]: 'Some value'}};
        });
        const error = getErrorObject((obj, item) => {
          if (item === 'email') {
            return {...obj, ...{email: 'Email is not valid'}};
          }
          return obj;
        });
        expect(validate(fields)).toEqual(error);
      });

    });
  });
  describe('Submit button', () => {
    const element = wrapper.find({
      label: 'SignUp',
      type: 'submit',
      primary: true
    });
    describe('Rendering', () => {
      it('Should exist', () => {
        expect(element.exists()).toBeTruthy();
      });
    });
  });

});
