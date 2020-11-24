/*
  Run via jest CameraRoll-test.js
  To use jest globally run npm install -g jest-cli
*/
import React from 'react';
import { Button } from '@ui-kitten/components';
import { Platform } from 'react-native';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import sinon from 'sinon';
import { PhotoCapture } from '../components/photos/PhotoCapture';
import configureMockStore from 'redux-mock-store';
import CameraRoll from "@react-native-community/cameraroll";

const mockStore = configureMockStore();
configure({ adapter: new Adapter() });

const createTestProps = (props: Object) => ({
  BackAction: jest.fn(),
  photoVals: {
    images: {}
  },
  vehicle: {
    c20: 0,
    data: [],
  },
  capture: jest.fn(),
  ...props
});

// jest.mock('capture', () => {
//   reutrn {
//
//   }
// }

describe('PhotoCamera Tests', () => {
  let wrapper: ShallowWrapper;
  let props;

  beforeEach(() => {
    // // create mocked props
    props = createTestProps({});
    // pass in mocked props
    wrapper = shallow(<PhotoCapture {...props} />);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('takes a picture when button is pressed', async () => {
    wrapper.setState({selectedOption: 'Crash Scene'});
    var spy = sinon.spy(wrapper.instance(), 'capture');
    wrapper.update();
    wrapper.find('#takePictureButton').simulate('press');
    wrapper.update();
    // expect(spy.called).toEqual(true);
    // console.log(wrapper.instance().props);
    expect(wrapper.instance().props.capture).toHaveBeenCalled();
  });


  it('saves image to camera roll on android', async () => {
    Platform.OS = 'android';
    var spy = sinon.spy(wrapper.instance(), 'saveToCameraRoll');
    // console.log('hello sir');
    wrapper.update();
    wrapper.instance().capture();
    // var imgUri = 'testImgUri';
    // var expectedOutput = "testImgUriTEST";
    expect(spy.called).toEqual(true);
    // expect(inst.saveToCameraRoll(imgUri)).toBe(expectedOutput);

  });


});
