import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import storyReducer from './reducers/StoryReducer';
import genericReducer from './reducers/GenericReducer';
import mapReducer from './reducers/MapReducer';
import quickquizReducer from './reducers/QuizQuizReducer';
import vehicleReducer from './reducers/VehicleReducer';
import nonmotoristReducer from './reducers/NonmotoristReducer';
import driverReducer from './reducers/DriverReducer';
import passengerReducer from './reducers/PassengerReducer';

const rootReducer = combineReducers({
  storyReducer: storyReducer,
  genericReducer: genericReducer,
  mapReducer: mapReducer,
  quickquizReducer,
  vehicleReducer,
  nonmotoristReducer,
  driverReducer,
  passengerReducer
});

const configureStore = () => {
  return createStore(rootReducer, composeWithDevTools());
}

export default configureStore;
