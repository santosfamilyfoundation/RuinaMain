import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: ''
};

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WRITE':
        return { ...state, current: action.payload}
    default:
      return state;
  }
};

export default storyReducer;
