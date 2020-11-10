/*
  Run via jest Http-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import waitUntil from "async-wait-until";
import { shallow } from "enzyme";
import sinon from 'sinon';
import { ReportToDatabase } from '../components/ReportToDatabase';

jest.mock("axios");

describe('ReportToDatabase Component', () => {
  let wrapper;
  // mock BackAction function
  const mockBackAction = jest.fn();

  beforeEach(() => {
   // pass the mock function as the BackAction prop
   jest.useFakeTimers();
   wrapper = shallow(<ReportToDatabase BackAction={mockBackAction}/>);
  });
  it('renders as expected', () => {
    // wrapper should not be undefined
    expect(wrapper).toBeDefined();
    // expect(wrapper.sendHttpRequest).toBeDefined();//Instance is your class or component shallow instance

  });

  it('send request as expected', async () => {
    const inst = wrapper.instance();
    var spy = sinon.spy(wrapper.instance(), 'sendHttpRequest');
    const expectedRes = [ { code: 200, msg: "success" } ];
    waitUntil(() => {
      return !_.isEmpty(inst.state("dbResponse"));
    }).then(() => {
      expect(spy.called).toEqual(true);
      expect(inst.state("dbResponse")).toEqual(expectedRes);
    });
  });
});

