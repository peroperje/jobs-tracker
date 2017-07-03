import React from 'react';
import {shallow} from 'enzyme';

import {LogIn} from '../LogIn';

describe('Login', () => {
  const wrapper = shallow(
    <LogIn
      isFetching={true}
      handleSubmitLogin={jest.fn()}
      handleSubmit={jest.fn()}
    />
  );

  describe('Header', () => {

    const el = wrapper.find('h2');
    describe('Rendering', () => {
      it('Should has header', () => {
        expect(el).toBeDefined();
      });

      it('Should has text Login', () => {
        
      });

    });


  });
  describe('Form', () => {
    describe('Rendering', () => {
      it('Should has form tag', () => {

      });
    });
    describe('Property', () => {
      it('Should has submit handler property', () => {

      });
    });
  });
  describe('Input fields', () => {
    describe('Rendering', () => {
      it('Should be defined', () => {

      });
    });
  });
  describe('Submit button', () => {
    describe('Rendering', () => {
      it('Should be defined', () => {

      });
      it('Shoud has text LOGIN', () => {

      });
    });
  });
  describe('Footer', () => {
    describe('Rendering', () => {
      it('Should contains create account link ', () => {

      });
      it('Should contain "are you new" text', () => {

      });
    });
  });
});
