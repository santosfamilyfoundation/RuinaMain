const initialState = {
    drivers: []
}

export default function driverReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDDRIVER':
            const numDriver = action.payload

            let driverArr = []
            console.log(action)
            for (let i = 0; i < numDriver; i++){
                driverArr.push({})
            }

            return {
                ...state,
                drivers: driverArr
            }
        default:
            return state;
    }
}