var uuid = require('react-native-uuid');

const initialState = {
    drivers: [],
}

export default function driverReducer (state=initialState, action) {
    switch (action.type) {

        case 'ADDDRIVER':
            const numDriver = action.payload

            let driverArr = []

            for (let i = 0; i < numDriver; i++){
                let id = uuid.v1();
                driverArr.push({id, response:{}})
            }

            return {
                ...state,
                drivers: driverArr
            }
            
        case 'UPDATEDRIVER':
            const { id, response } = action.payload
            const currentResponse = state.drivers.find(driver => driver.id == id).response
            for (let[key,value] of Object.entries(currentResponse)){
                if (response[key] == null) {
                    response[key] = value
                }
            }
            let newDriverArr = state.drivers.filter(driver => driver.id != id).concat({id, response})

            return {
                ...state,
                drivers: newDriverArr
            }
        
        default:
            return state;
    }
}