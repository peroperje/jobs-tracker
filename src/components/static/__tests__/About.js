import React from 'react';
import renderer from 'react-test-renderer';

import About from '../About';

describe('About component', () => {

  it('About Snapshot ', () => {
    const tree = renderer.create(<About/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
