var uuid = require('react-native-uuid');

const initialState = {
    data: []
}

export default function passengerReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDPASSENGER':
            const numPassenger = action.payload

            let passengerArr = []

            for (let i = 0; i < numPassenger; i++){
                let id = uuid.v1();
                passengerArr.push({id})
            }

            return {
                ...state,
                data: passengerArr
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