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
        case 'UPDATEVEHICLE':
            const { id, response } = action.payload
            const vehicle = state.vehicles.find(vehicle => vehicle.id == id)
            if (vehicle.hazardous){
                let newVehicleArr = state.vehicles.filter(vehicle => vehicle.id != id).concat({id, response, hazardous: true})
                return {
                    ...state,
                    vehicles: newVehicleArr
                }
            } else {
                let newVehicleArr = state.vehicles.filter(vehicle => vehicle.id != id).concat({id, response, hazardous: null})
                return {
                    ...state,
                    vehicles: newVehicleArr
                }
            }
        default:
            return state;
    }
}