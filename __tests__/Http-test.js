/*
  Run via jest Http-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import waitUntil from "async-wait-until";
import { shallow } from "enzyme";
import { ReportToDatabase } from '../components/ReportToDatabase';

jest.mock("axios");
jest.useFakeTimers(); //Add this on top of your test file.

describe('ReportToDatabase Component', () => {
  let wrapper;
  // mock BackAction function
  const mockBackAction = jest.fn();

  beforeEach(() => {
   // pass the mock function as the BackAction prop
   wrapper = shallow(<ReportToDatabase BackAction={mockBackAction}/>);
  });
  it('renders as expected', () => {
    // wrapper should not be undefined
    expect(wrapper).toBeDefined();
    // expect(wrapper.sendHttpRequest).toBeDefined();//Instance is your class or component shallow instance

  });
  it('send request as expected',async () => {
    const inst = wrapper.instance();
    // axios.post.mockResolvedValue({code: 200, msg: "success"});
    inst.sendHttpRequest()
    const expectedRes = [ { code: 200, msg: "success" } ];
    waitUntil(() => {
      return !_.isEmpty(inst.state("dbResponse"));
    }).then(() => {
      expect(inst.state("dbResponse")).toEqual(expectedRes);
    });
  });
});