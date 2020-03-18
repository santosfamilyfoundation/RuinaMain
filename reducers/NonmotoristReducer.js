var uuid = require('react-native-uuid');

const initialState = {
    data: []
}

export default function nonmotoristReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDNONMOTORIST':
            const numNonmotorist = action.payload

            let nonmotoristArr = []

            for (let i = 0; i < numNonmotorist; i++){
                let id = uuid.v1();
                nonmotoristArr.push({id})
            }

            return {
                ...state,
                data: nonmotoristArr
            }
        case 'UPDATENONMOTORIST':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedNonmotorist = updatedState.find(nonmotorist => nonmotorist.id == id)
            if(selectedNonmotorist.response == undefined) {
                selectedNonmotorist.response = {}
            }
            selectedNonmotorist.response[question] = selection;

            return {
                ...state,
                data: updatedState
            }

        default:
            return state;
    }
}