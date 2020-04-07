// var uuid = require('react-native-uuid');

const initialState = {
    data: [],

}

export default function vehicleReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDVEHICLE':
            return {
                ...state,
                data: state.data.concat([{hazardous: null, id:action.payload.vehicleID, driver: action.payload.driverID}])
            }
        case 'ADDLVHM':
            return {
                ...state,
                data: state.data.concat([{hazardous: true, id:action.payload.vehicleID, driver: action.payload.driverID}])
            }
        case 'UPDATEVEHICLE':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedVehicle = updatedState.find(vehicle => vehicle.id == id)
            if(selectedVehicle.response == undefined) {
                selectedVehicle.response = {}
            }
            selectedVehicle.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }

        default:
            return state;
    }
}
