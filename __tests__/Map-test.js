/*
  Run via jest Map-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import React from 'react';
import { shallow, mount } from "enzyme";
import sinon from 'sinon';
import { Map } from '../components/map/Map';

const createTestProps = (props: Object) => ({
  updateRoad: jest.fn(),
  BackAction: jest.fn(),
  navigation: {
    goBack: jest.fn(),
    state: {
      params: {
        id: null,
      },
    },
  },
  ...props
});

describe('Map Component', () => {
  let wrapper: ShallowWrapper;
  let props: any;   // use type "any" to opt-out of type-checking

  beforeEach(() => {
    // create mocked props
    props = createTestProps({});
    // pass in mocked props
    wrapper = shallow(<Map {...props} />);
  });

  it('renders as expected', () => {
    // wrapper should not be undefined
    expect(wrapper).toBeDefined();
  });

  it('loading screen appears as expected', () => {
    // wrapper should have the loading screen at first
    expect(wrapper.find('#loadingScreen').exists()).toBe(true);
  });

  it('map screen appears as expected', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false});
    // wrapper should have the nav bar and title
    expect(wrapper.find('#mapNavBar').exists()).toBe(true);
    // wrapper should have the map view
    expect(wrapper.find('#mapView').exists()).toBe(true);
    // wrapper should have map buttons located in the side bar
    expect(wrapper.find('#mapButtons').exists()).toBe(true);
    // wrapper should have the lat/long text display
    expect(wrapper.find('#latLongCoord').exists()).toBe(true);
    // wrapper should have the save coordinate button
    expect(wrapper.find('#saveButton').exists()).toBe(true);
    // wrapper should have the failed to save dialog box
    expect(wrapper.find('#saveFailedDialog').exists()).toBe(true);
    // wrapper should have the failed to load dialog box
    expect(wrapper.find('#loadFailedDialog').exists()).toBe(true);
  });

  it('failed to save dialog works as expected', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false});
    // display dialog box
    wrapper.setState({displayFailedToSaveMessage: true});
    // simulate pressing okay
    wrapper.find('#saveFailedDialog').simulate('ok');
    // make sure display boolean was set back to false
    wrapper.update();
    expect(wrapper.state('displayFailedToSaveMessage')).toEqual(false);
  });

  it('failed to load dialog works as expected', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false});
    // display dialog box
    wrapper.setState({displayFailedToLoadMessage: true});
    // simulate pressing okay
    wrapper.find('#loadFailedDialog').simulate('ok');
    // make sure display boolean was set back to false
    wrapper.update();
    expect(wrapper.state('displayFailedToLoadMessage')).toEqual(false);
  });

  it('calls saveLocations() when save button is pressed', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false});
    // create a spy around saveLocations()
    var spy = sinon.spy(wrapper.instance(), 'saveLocations');
    wrapper.update();
    // simulate pressing the plus button
    wrapper.find('#saveButton').simulate('press');
    wrapper.update();
    // make sure onPressZoomIn gets called
    expect(spy.called).toEqual(true);
  });

  it('calls onPressRecenter() when center button pressed', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false});
    // create a spy around onPressRecenter()
    var spy = sinon.spy(wrapper.instance(), 'onPressRecenter');
    wrapper.update();
    // simulate pressing the plus button
    wrapper.find('#recenterButton').simulate('press');
    wrapper.update();
    // make sure onPressZoomIn gets called
    expect(spy.called).toEqual(true);
  });

  it('zooms in correctly when plus button pressed', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false, testMode: true});
    // get original map region
    var originalRegion = wrapper.state('region');
    // calculate new map region
    var newRegion = {
      latitude: originalRegion.latitude,
      longitude: originalRegion.longitude,
      latitudeDelta: originalRegion.latitudeDelta*2,
      longitudeDelta: originalRegion.longitudeDelta*2,
    }
    // create a spy around onPressZoomIn()
    var spy = sinon.spy(wrapper.instance(), 'onPressZoomIn');
    wrapper.update();
    // simulate pressing the plus button
    wrapper.find('#zoomInButton').simulate('press');
    wrapper.update();
    // make sure onPressZoomIn gets called
    expect(spy.called).toEqual(true);
    // make sure the map region is updated correctly
    expect(wrapper.state('region')).toEqual(newRegion);
  });

  it('zooms out correctly when minus button pressed', () => {
    // after setting loading to false, the map screen should appear
    wrapper.setState({loading: false, testMode: true});
    // get original map region
    var originalRegion = wrapper.state('region');
    // calculate new map region
    var newRegion = {
      latitude: originalRegion.latitude,
      longitude: originalRegion.longitude,
      latitudeDelta: originalRegion.latitudeDelta/2,
      longitudeDelta: originalRegion.longitudeDelta/2,
    }
    // create a spy around onPressZoomIn()
    var spy = sinon.spy(wrapper.instance(), 'onPressZoomOut');
    wrapper.update();
    // simulate pressing the plus button
    wrapper.find('#zoomOutButton').simulate('press');
    wrapper.update();
    // make sure onPressZoomIn gets called
    expect(spy.called).toEqual(true);
    // make sure the map region is updated correctly
    expect(wrapper.state('region')).toEqual(newRegion);
  });

});
