import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';

const rootReducer = combineReducers({
  story: storyReducer,
  genericReducer: genericReducer,
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;