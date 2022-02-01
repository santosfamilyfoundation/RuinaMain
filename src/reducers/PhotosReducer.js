import { combineReducers } from 'redux';

const INITIAL_STATE = {
  images: {}
};

const photosReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADDPHOTOS':
      let imagesObj = state.images;
      let images;
      if(imagesObj[action.data.tag]){
        imagesObj[action.data.tag].forEach(elm => {
          if(elm != action.data.image){
            imagesObj[action.data.tag].push(action.data.image)
          }
        });
      }else{
        imagesObj[action.data.tag] = [action.data.image];
      }
      return { ...state, images: imagesObj}
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
