import React from 'react';
import renderer from 'react-test-renderer';

import TestProviderHelper from '../../../test/TestProviderHelper';
import Home from '../Home';


describe('Home component', () => {

  it('Home Snapshot', () => {
    const tree = renderer.create(
          <TestProviderHelper><Home /></TestProviderHelper>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

});
