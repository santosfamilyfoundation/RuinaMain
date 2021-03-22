import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: '',
  response: {}
};

const storyReducer = (state = INITIAL_STATE, action) => {
  // console.log('Action:', action);
  switch (action.type) {
    case 'WRITE':
        return { ...state, current: action.payload}
    case 'UPDATERESPONSE':
        return { ...state, response:{...state.response, ...action.payload}}
    default:
      return state;
  }
};

export default storyReducer;
