var uuid = require('react-native-uuid');

const initialState = {
    data: [],
}

export default function roadReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDROAD':
            console.log("add road " + action.payload.roadID);
            const setupData = action.payload.setupData
            data = []
            // add setupData from QuickSurvey to road data
            data.push({ response: setupData, id: action.payload.roadID})
            // console.log(data);
            return {
                ...state,
                data: state.data.concat(data)
            }
        case 'UPDATEROAD': {
            const { id, question, selection } = action.payload;
            let updatedState = state.data;
            let roadData = updatedState.find(road => road.id == id);
            // console.log('question answered for road:', question)
            // console.log('selection for question:', selection)
            roadData.response[question] = selection;
            return {
                ...state,
                data: updatedState
            }
        }
        case 'DELETEROADSINGLERESPONSE': {
            const { id, question } = action.payload;
            let updatedState = state.data;
            let roadData = updatedState.find(road => road.id == id);
            if (question in roadData.response) {
                delete roadData.response[question];
            }
            return {
                ...state,
                data: updatedState
            }
        }
      case 'RESETROAD':
          console.log("RESET ROAD!");
          state = initialState;
          return {
              ...state,
          }
        default:
                return state;
    }
}
