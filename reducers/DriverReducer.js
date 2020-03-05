var uuid = require('react-native-uuid');

const initialState = {
    drivers: [],
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
            
        case 'UPDATEDRIVER':
            console.log(action.payload)
            const { id, response } = action.payload
            let newDriverArr = state.drivers.filter(driver => driver.id != id).concat({id, response})

            return {
                ...state,
                drivers: newDriverArr
            }
        
        default:
            return state;
    }
}