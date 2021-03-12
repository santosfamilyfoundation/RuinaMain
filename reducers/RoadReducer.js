var uuid = require('react-native-uuid');

const initialState = {
    data: [],
}

export default function roadReducer (state=initialState, action) {
  switch (action.type) {
      case 'ADDROAD':
          const setupData = action.payload
          data = []
          // add setupData from QuickSurvey to road data
          data.push({response: setupData, id: uuid.v1()})
          // console.log(data);
          return {
              ...state,
              data: state.data.concat(data)
          }
      case 'UPDATEROAD':
        const { id, question, selection } = action.payload;
        let updatedState = state.data;
        let roadData = updatedState.find(road => road.id == id);
        roadData.response[question] = selection;
        return {
          ...state,
          data: updatedState
        }
        default:
            return state;
    }
}
