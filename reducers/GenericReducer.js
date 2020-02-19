import { combineReducers } from 'redux';

const INITIAL_STATE = {
  new: ''
};

const genericReducer = (state = INITIAL_STATE, action) => {
    res = {...state}
    res[action.field] = action.payload
    return res
};

export default genericReducer;