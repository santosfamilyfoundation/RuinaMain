import { combineReducers } from 'redux';

const INITIAL_STATE = {
  lat: "",
  long: "",
  markers: []
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATEMAPLAT':
        return {
          ...state,
          lat: action.payload,
        }
    case 'UPDATEMAPLONG':
        return {
          ...state,
          long: action.payload,
        }
    case 'UPDATEMARKERS':
        return {
          ...state,
          markers: action.payload,
        }
    default:
      return state;
  }
};

export default mapReducer;
