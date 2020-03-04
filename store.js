import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';
import mapReducer from './reducers/MapReducer';
import photosReducer from './reducers/PhotosReducer';

const rootReducer = combineReducers({
  story: storyReducer,
  genericReducer: genericReducer,
  mapReducer: mapReducer,
  photosReducer: photosReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
