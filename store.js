import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';

const rootReducer = combineReducers({
  story: storyReducer,
  genericReducer: genericReducer,
});

const configureStore = () => {
  return createStore(rootReducer, compose(
    composeWithDevTools(),
    applyMiddleware(thunk)
  ));
}

export default configureStore;