var uuid = require('react-native-uuid');

const initialState = {
    data: []
}

export default function passengerReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDPASSENGER':
            return {
                ...state,
                data: state.data.concat([{id: action.payload.id, vehicle: action.payload.vehicleID}])
            }
        case 'UPDATEPASSENGER':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedPassenger = updatedState.find(passenger => passenger.id == id)
            if(selectedPassenger.response == undefined) {
                selectedPassenger.response = {}
            }
            selectedPassenger.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }

        default:
            return state;
    }
}