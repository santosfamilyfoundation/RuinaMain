var uuid = require('react-native-uuid');

const initialState = {
    data: [],
}

export default function driverReducer (state=initialState, action) {
    switch (action.type) {

        case 'ADDDRIVER':
            console.log("add driver " + action.payload.driverID);
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

        case 'DELETEDRIVER':
            const {driverID} = action.payload
            console.log("delete driver " + driverID);
            updatedState = state.data;
            return {
                ...state,
                data: updatedState.filter(driver => driver.id != driverID)
            }
        
        case 'RESETDRIVER':
            console.log("RESET DRIVER!");
            state = initialState;
            return {
                ...state,
            }


        default:
            return state;
    }
}
