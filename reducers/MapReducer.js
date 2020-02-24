import { combineReducers } from 'redux';

const INITIAL_STATE = {
  mapDetails: ''
};

const mapReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WRITE':
        return { ...state, mapDetails: action.payload}
    default:
      return state;
  }
};

export default mapReducer;
