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
                passengerArr.push({})
            }

            return {
                ...state,
                passengers: passengerArr
            }
        default:
            return state;
    }
}