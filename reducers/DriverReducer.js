var uuid = require('react-native-uuid');

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
                let id = uuid.v1();
                driverArr.push({id})
            }

            return {
                ...state,
                drivers: driverArr
            }
        default:
            return state;
    }
}