var uuid = require('react-native-uuid');

const initialState = {
    data: [],
}

export default function driverReducer (state=initialState, action) {
    switch (action.type) {

        case 'ADDDRIVER':
            return {
                ...state,
                data: state.data.concat([{id: action.payload.driverID, vehicle: action.payload.vehicleID}])
            }
            
        case 'UPDATEDRIVER':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedDriver = updatedState.find(driver => driver.id == id)
            if(selectedDriver.response == undefined) {
                selectedDriver.response = {}
            }
            selectedDriver.response[question] = selection;

            
            // const { id, response } = action.payload
            // const currentResponse = state.drivers.find(driver => driver.id == id).response
            // for (let[key,value] of Object.entries(currentResponse)){
            //     if (response[key] == null) {
            //         response[key] = value
            //     }
            // }
            // let newDriverArr = state.drivers.filter(driver => driver.id != id).concat({id, response})

            return {
                ...state,
                data: updatedState
            }
        
        default:
            return state;
    }
}