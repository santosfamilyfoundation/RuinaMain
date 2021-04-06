import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: '',
  response: []
};

const storyReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WRITE':
      return { ...state, current: action.payload }
    case 'UPDATERESPONSE':
      const response = [ ...state.response, action.payload ]
      return { ...state, response }
    default:
      return state;
  }
};

export default storyReducer;
