/*
  Run via jest App-test.js
*/

import 'react-native';
import React from 'react';
import { shallow, mount } from "enzyme";
import App from '../App';

// Note: test renderer must be required after react-native.
// import renderer from 'react-test-renderer';
describe('App.js tests', () => {
  let wrapper;

  beforeEach(() => {
   wrapper = shallow(<App />);
  });

  it('renders correctly', () => {
    // wrapper should not be undefined
    expect(wrapper).toBeDefined();
  });
});
