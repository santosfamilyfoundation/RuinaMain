var uuid = require('react-native-uuid');

const initialState = {
    passengers: []
}

export default function passengerReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDPASSENGER':
            const numPassenger = action.payload

            let passengerArr = []
            console.log(action)
            for (let i = 0; i < numPassenger; i++){
                let id = uuid.v1();
                passengerArr.push({id})
            }

            return {
                ...state,
                passengers: passengerArr
            }
        case 'UPDATEPASSENGER':
            const { id, response } = action.payload
            let newPassengerArr = state.passengers.filter(passenger => passenger.id != id).concat({id, response})

            return {
                ...state,
                passengers: newPassengerArr
            }
        default:
            return state;
    }
}