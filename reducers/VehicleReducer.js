const initialState = {
    vehicles: []
}

export default function vehicleReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDVEHICLE':
            const numVehicle = action.payload

            let vehicleArr = []
            for (let i = 0; i < numVehicle; i++){
                vehicleArr.push({type: 'normal'})
            }
            return {
                ...state,
                vehicles: state.vehicles.concat(vehicleArr)
            }
        case 'ADDLVHM':
            const numLvhm = action.payload

            let lvhmArr = []
            for (let i = 0; i < numLvhm; i++){
                lvhmArr.push({type: 'hazardous'})
            }
            return {
                ...state,
                vehicles: state.vehicles.concat(lvhmArr)
            }
        default:
            return state;
    }
}