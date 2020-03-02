const initialState = {
    vehicles: []
}

export default function vehicleReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADD':
            return {
                ...state,
                vehicles: [...state.vehicles, {}]
            }
        default:
            return state;
    }
}