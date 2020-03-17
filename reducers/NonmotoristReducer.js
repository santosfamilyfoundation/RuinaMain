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
            const { id, response } = action.payload
            let newNonmotoristArr = state.data.filter(nonmotorist => nonmotorist.id !=id).concat({id, response})

            return {
                ...state,
                data: newNonmotoristArr
            }
        default:
            return state;
    }
}