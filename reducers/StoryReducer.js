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
    case 'RESETSTORY':
      console.log("RESET ROAD!");
      state = INITIAL_STATE;
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default storyReducer;
