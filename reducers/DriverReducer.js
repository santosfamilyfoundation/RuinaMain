var uuid = require('react-native-uuid');

const initialState = {
    data: [],
}

export default function driverReducer (state=initialState, action) {
    switch (action.type) {

        case 'ADDDRIVER':
            return {
                ...state,
                data: state.data.concat([{id: action.payload.driverID, vehicle: action.payload.vehicleID}])
            }
            
        case 'UPDATEDRIVER':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedDriver = updatedState.find(driver => driver.id == id)
            if(selectedDriver?.response == undefined) {
                selectedDriver.response = {}
            }
            selectedDriver.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }
        
        default:
            return state;
    }
}