import { combineReducers } from 'redux';

const INITIAL_STATE = {
  image: '',
  paths: []
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDPHOTO':
      let imageObj = state.image;
      let pathsObj = state.paths;
      imageObj = action.data.image;
      pathsObj = action.data.paths
      return { ...state, image: imageObj, paths: pathsObj}
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
