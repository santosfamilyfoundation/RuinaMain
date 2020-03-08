

const INITIAL_STATE = {
};

const genericReducer = (state = INITIAL_STATE, action) => {
  switch (action.type){
    case 'WRITE_SELECTION':
      res = {...state}
      res[action.field] = action.payload
      return res
    default:
      return state;
  }

};

export default genericReducer;