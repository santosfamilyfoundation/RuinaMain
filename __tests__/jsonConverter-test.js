/*
  Run via jest jsonConverter-test.js
  To use jest globally run npm install -g jest-cli
*/
import 'react-native';
import JSONconverter from '../utils/jsonConverter';

describe('JSONconverter Component', () => {
  var data = { "driver": [{ "id": "76f66fd1-2577-11eb-8d26-15f6aec46534", "vehicle": "76f66fd0-2577-11eb-8d26-15f6aec46534" }, { "id": "76f6bdf1-2577-11eb-8d26-15f6aec46534", "vehicle": "76f6bdf0-2577-11eb-8d26-15f6aec46534" }, { "id": "76f70c11-2577-11eb-8d26-15f6aec46534", "vehicle": "76f70c10-2577-11eb-8d26-15f6aec46534" }], 
               "nonmotorist": [{ "id": "76f621b0-2577-11eb-8d26-15f6aec46534" }, { "id": "76f621b1-2577-11eb-8d26-15f6aec46534" }], 
               "vehicle": [{ "hazardous": null, "id": "76f66fd0-2577-11eb-8d26-15f6aec46534", "driver": "76f66fd1-2577-11eb-8d26-15f6aec46534" }, { "hazardous": true, "id": "76f6bdf0-2577-11eb-8d26-15f6aec46534", "driver": "76f6bdf1-2577-11eb-8d26-15f6aec46534" }, { "hazardous": true, "id": "76f70c10-2577-11eb-8d26-15f6aec46534", "driver": "76f70c11-2577-11eb-8d26-15f6aec46534" }], 
               "passenger": [], "road": [{ "response": {}, "id": "76f648c0-2577-11eb-8d26-15f6aec46534" }] };
  var converter = new JSONconverter();

  
  it('should call JSON.stringify', () => {
    let expected = JSON.stringify(data);
    let actual = converter.handleConverter("json", data);
    expect(actual).toEqual(expected);
  });

  it('should call JSONtoCSV', () => {
    let expected = converter.JSONtoCSV(data);
    let actual = converter.handleConverter("csv", data);
    expect(actual).toEqual(expected);
  });

  it('should call JSONtoXLS', () => {
    let expected = converter.JSONtoXLS(data);
    let actual = converter.handleConverter("xlsx", data);
    expect(actual).toEqual(expected);
  });

  it('should call JSONtoHTML', () => {
    let expected = converter.JSONtoHTML(data);
    let actual = converter.handleConverter("html", data);
    expect(actual).toEqual(expected);
  });  
});
