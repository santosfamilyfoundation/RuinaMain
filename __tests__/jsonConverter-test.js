/*
  Run via jest Email-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import JSONconverter from '../utils/jsonConverter';

describe('JSONconverter Component', () => {
  let wrapper;
  // mock BackAction function
  const mockBackAction = jest.fn();

  beforeEach(() => {
   // pass the mock function as the BackAction prop
   wrapper = shallow(<JSONconverter BackAction={mockBackAction}/>);
  });
  
  it('handleConverter calls correct converter function given format', () => {
    formats = ["json", "csv", "xlsx", "html"];
    for (var format in formats){
        switch(format){
          case "json":
            // create a spy around handleEmail()
            var spy = sinon.spy(wrapper.instance(), '');
            break;
          case "csv":
            break;
          case "xlsx":
            break;
          case "html":
            break;
          default:
            break;
        }
    }
  });
  
});
