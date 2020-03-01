import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';
import mapReducer from './reducers/MapReducer';
import quickquizReducer from './reducers/QuizQuizReducer';

const rootReducer = combineReducers({
  storyReducer: storyReducer,
  genericReducer: genericReducer,
  mapReducer: mapReducer,
  quickquizReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
