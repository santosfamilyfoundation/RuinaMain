import { combineReducers } from 'redux';

const INITIAL_STATE = {
  images: []
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'WRITE':
        return { ...state, images: action.images}
    default:
      return state;
  }
};

export default photosReducer;
