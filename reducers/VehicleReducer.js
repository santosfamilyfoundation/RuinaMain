var uuid = require('react-native-uuid');

const initialState = {
    vehicles: [],

}

export default function vehicleReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDVEHICLE':
            const numVehicle = action.payload

            let vehicleArr = []
            for (let i = 0; i < numVehicle; i++){
                let id = uuid.v1();
                vehicleArr.push({hazardous: null, id})
            }
            return {
                ...state,
                vehicles: state.vehicles.concat(vehicleArr)
            }
        case 'ADDLVHM':
            const numLvhm = action.payload

            let lvhmArr = []
            for (let i = 0; i < numLvhm; i++){
                let id = uuid.v1();
                lvhmArr.push({hazardous: true, id})
            }
            return {
                ...state,
                vehicles: state.vehicles.concat(lvhmArr)
            }
        default:
            return state;
    }
}