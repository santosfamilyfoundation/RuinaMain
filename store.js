import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';

const rootReducer = combineReducers({
  story: storyReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
