import React from 'react';
import {shallow} from 'enzyme';
import Paper from 'material-ui/Paper';

import {LogIn, validate} from '../LogIn';
import FormHeader from '../../form-utils/FormHeader';

const wrapper = shallow(
  <LogIn
    isFetching={false}
    handleSubmitLogin={jest.fn()}
    handleSubmit={jest.fn()}
  />
);
describe('Login', () => {
  describe('Paper', () => {
    describe('Rendering', () => {
      it('Should be defined', () => {
        expect(wrapper.find(Paper).exists()).toBeTruthy();
      });
    });
  });
  describe('Header', () => {
    describe('Rendering', () => {
      it('Should be defined', () => {
        expect(wrapper.find(FormHeader).exists()).toBeTruthy();
      });
    });


  });
  describe('Form', () => {
    const elementForm = wrapper.find('form');
    describe('Rendering', () => {
      it('Should has form tag', () => {
        expect(elementForm.exists()).toBeTruthy();
      });
    });
  });
  describe('Input fields', () => {
    const fields = ['email', 'password'];
    /**
     * @description create Object from array property
     * @param {Function} reducer logic for object creation
     * @return {*}
     */
    const getFieldObject = (reducer) => fields.reduce(reducer, {});
    /**
     * @description create expected error object
     * @param {Function} reducer function contians logic for object creation
     * @return {*}
     */
    const getErrorObject = (reducer) => fields.reduce(reducer, {});
    describe('Rendering', () => {
      fields.forEach((field) => {
        it(`Should be defined ${field}`, () => {
          expect(wrapper.find({name: field}).exists()).toBeTruthy();
        });
      });
    });
    describe('Validation', () => {
      it('Should empty fields fail validation', () => {
        const fields = getFieldObject((o, filed) => ({...o, ...{[filed]: ''}}));
        const error = getErrorObject((obj, item) => ({...obj, ...{[item]: 'Required'}}));
        expect(validate(fields)).toEqual(error);
      });
      it('Should invalid email failes validation', () => {
        const fields = getFieldObject((obj, item) => ({...obj, ...{[item]: 'Some value'}}));
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
    describe('Rendering', () => {
      xit('Should be defined', () => {

      });
      xit('Shoud has text LOGIN', () => {

      });
    });
  });
  describe('Footer', () => {
    describe('Rendering', () => {
      xit('Should contains create account link ', () => {

      });
      xit('Should contain "are you new" text', () => {

      });
    });
  });
});
