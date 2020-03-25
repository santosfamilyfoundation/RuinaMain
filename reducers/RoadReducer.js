const initialState = {
    data: []
}

export default function roadReducer (state=initialState, action) {
    switch (action.type) {
        case 'UPDATEROAD':
            let updatedState = state.data;
            return {
                ...state,
                data: updatedState
            }

        default:
            return state;
    }
}
