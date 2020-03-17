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
            const { id, response } = action.payload
            let newPassengerArr = state.data.filter(passenger => passenger.id != id).concat({id, response})

            return {
                ...state,
                data: newPassengerArr
            }
        default:
            return state;
    }
}