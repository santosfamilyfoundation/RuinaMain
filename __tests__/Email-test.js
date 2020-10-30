/*
  Run via jest Email-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { EmailFinalReport } from '../components/EmailFinalReport';

describe('EmailFinalReport Component', () => {
  let wrapper;
  // mock BackAction function
  const mockBackAction = jest.fn();

  beforeEach(() => {
   // pass the mock function as the BackAction prop
   wrapper = shallow(<EmailFinalReport BackAction={mockBackAction}/>);
  });

  it('renders as expected', () => {
    // wrapper should not be undefined
    expect(wrapper).toBeDefined();
    // wrapper should have the nav bar and title
    expect(wrapper.find('#emailNavBar').exists()).toBe(true);
    // wrapper should have the filename text input
    expect(wrapper.find('#filenameInput').exists()).toBe(true);
    // wrapper should have the send button
    expect(wrapper.find('#sendButton').exists()).toBe(true);
  });

  it('generates default filename correctly', () => {
    // get ReactComponent version of wrapper
    const inst = wrapper.instance();
    // run getDefaultFilename() and make sure output is correct
    var date = new Date();
    var localTime = date.toLocaleTimeString().replace(/\W/g, '.');
    var localDate = date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
    var filename = "Crash Report " + localDate + " at " + localTime;
    expect(inst.getDefaultFilename()).toBe(filename);
  });

  it('assigns correct initial filename TextInput value', () => {
    // get ReactComponent version of wrapper
    const inst = wrapper.instance();
    // make sure the filename state variable is equal to the default filename
    expect(wrapper.state('filename')).toBeDefined();
    expect(wrapper.state('filename')).toEqual(inst.getDefaultFilename());
  });

  it('calls handleEmail() when send button is pressed', () => {
    // create a spy around handleEmail()
    var spy = sinon.spy(wrapper.instance(), 'handleEmail');
    wrapper.update();
    // simulate pressing the send button
    wrapper.find('#sendButton').simulate('press');
    // make sure handleEmail gets called
    expect(spy.called).toEqual(true);
  });

  it('updates filename correctly', () => {
    // simulate changing the filename text input
    wrapper.find('#filenameTextInput').simulate(
      'changeText',
      'newfilename',
    )
    wrapper.update();
    // make sure the filename state variable is updated accordingly
    expect(wrapper.state('filename')).toEqual('newfilename');
  });
});
