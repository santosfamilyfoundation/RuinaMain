import { createStore, combineReducers } from 'redux';
import storyReducer from './reducers/StoryReducer';

const rootReducer = combineReducers({
  story: storyReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;