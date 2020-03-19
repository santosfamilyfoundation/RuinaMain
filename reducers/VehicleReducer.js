var uuid = require('react-native-uuid');

const initialState = {
    data: [],

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
                data: state.data.concat(vehicleArr)
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
                data: state.data.concat(lvhmArr)
            }
        case 'UPDATEVEHICLE':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedVehicle = updatedState.find(vehicle => vehicle.id == id)
            if(selectedVehicle.response == undefined) {
                selectedVehicle.response = {}
            }
            selectedVehicle.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }

        default:
            return state;
    }
}