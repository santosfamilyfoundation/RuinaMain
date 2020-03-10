var uuid = require('react-native-uuid');

const initialState = {
    nonmotorists: []
}

export default function nonmotoristReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDNONMOTORIST':
            const numNonmotorist = action.payload

            let nonmotoristArr = []

            for (let i = 0; i < numNonmotorist; i++){
                let id = uuid.v1();
                nonmotoristArr.push({id, response:{}})
            }

            return {
                ...state,
                nonmotorists: nonmotoristArr
            }
        case 'UPDATENONMOTORIST':
            const { id, response } = action.payload
            let newNonmotoristArr = state.nonmotorists.filter(nonmotorist => nonmotorist.id !=id).concat({id, response})
            const currentResponse = state.nonmotorists.find(nonmotorist => nonmotorist.id == id).response
            for (let[key,value] of Object.entries(currentResponse)){
                if (response[key] == null) {
                    response[key] = value
                }
            }

            return {
                ...state,
                nonmotorists: newNonmotoristArr
            }
        default:
            return state;
    }
}