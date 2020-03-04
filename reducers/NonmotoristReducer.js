var uuid = require('react-native-uuid');

const initialState = {
    nonmotorists: []
}

export default function nonmotoristReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDNONMOTORIST':
            const numNonmotorist = action.payload

            let nonmotoristArr = []
            console.log(action)
            for (let i = 0; i < numNonmotorist; i++){
                let id = uuid.v1();
                nonmotoristArr.push({id})
            }

            return {
                ...state,
                nonmotorists: nonmotoristArr
            }
        default:
            return state;
    }
}