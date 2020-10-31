/*
  Run via jest Http-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import { shallow } from "enzyme";
import { SaveReportDatabase } from '../components/SaveReportDatabase';

import axios from "axios";
jest.mock("axios") //Add this on top of your test file.

describe('SaveReportDatabase Component', () => {
  let wrapper;
  // mock BackAction function
  const mockBackAction = jest.fn();

  beforeEach(() => {
   // pass the mock function as the BackAction prop
   wrapper = shallow(<SaveReportDatabase BackAction={mockBackAction}/>);
  });
  it('renders as expected', () => {
    // wrapper should not be undefined
    expect(wrapper.sendHttpRequest).toBeDefined();//Instance is your class or component shallow instance

  });
  it('send request as expected',() => {
    axios.post.mockResolvedValue({code: 200, msg: "success"});
    const result = wrapper.sendHttpRequest()
    expect(result).toEqual({code: 200, msg: "success"})
  });
});