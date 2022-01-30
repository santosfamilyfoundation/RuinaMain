import { combineReducers } from 'redux';

const INITIAL_STATE = {
  image: ''
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDPHOTO':
      let imageObj = state.image;
      console.log('inside reducer: ', imageObj)
      imageObj = action.data.image;
      return { ...state, image: imageObj}
    case 'RESETPHOTO':
      console.log("RESET PHOTO!");
      state = INITIAL_STATE;
      return {
        ...state,
      }
    default:
      return state;
  }
};

export default photosReducer;
