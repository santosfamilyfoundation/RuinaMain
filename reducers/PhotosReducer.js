import { combineReducers } from 'redux';

const INITIAL_STATE = {
  images: []
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDPHOTOS':
        let imagesArr = Array.from(new Set(state.images.concat(action.images)));
        return { ...state, images: imagesArr}
    default:
      return state;
  }
};

export default photosReducer;
