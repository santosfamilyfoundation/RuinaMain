// var uuid = require('react-native-uuid');

const initialState = {
    c20: 0,     // num vehicles involved question
    data: [],

}

export default function vehicleReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDVEHICLE':
            console.log("add vehicle " + action.payload.vehicleID);
            return {
                ...state,
                c20: state.c20 + 1,
                data: state.data.concat([{id:action.payload.vehicleID, driver: action.payload.driverID}])
            }

        case 'UPDATEVEHICLE':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedVehicle = updatedState.find(vehicle => vehicle.id == id)
            if(selectedVehicle?.response == undefined) {
                selectedVehicle.response = {}
            }
            selectedVehicle.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }

        case 'DELETEVEHICLE':
            const {vehicleID} = action.payload
            console.log("delete vehicle " + vehicleID);
            updatedState = state.data;
            return {
                ...state,
                data: updatedState.filter(vehicle => vehicle.id != vehicleID)
            }

        default:
            return state;
    }
}
