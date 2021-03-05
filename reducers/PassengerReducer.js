var uuid = require('react-native-uuid');

const initialState = {
    data: []
}
let updatedState;
export default function passengerReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDPASSENGER':
            console.log("add passenger " + action.payload.id);
            return {
                ...state,
                data: state.data.concat([{id: action.payload.id, vehicle: action.payload.vehicleID}])
            }
        case 'UPDATEPASSENGER':
            const { id, question, selection } = action.payload
            updatedState = state.data;
            let selectedPassenger = updatedState.find(passenger => passenger.id == id)
            if(selectedPassenger.response == undefined) {
                selectedPassenger.response = {}
            }
            selectedPassenger.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }
        case 'DELETEPASSENGER':
            const {passengerID} = action.payload
            console.log("delete passenger " + passengerID);
            updatedState = state.data;
            return {
                ...state,
                data: updatedState.filter(passenger => passenger.id != passengerID)
            }
        default:
            return state;
    }
}
