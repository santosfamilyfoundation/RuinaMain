import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';
import quickquizReducer from './reducers/QuizQuizReducer';

const rootReducer = combineReducers({
  story: storyReducer,
  genericReducer: genericReducer,
  quiz: quickquizReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
