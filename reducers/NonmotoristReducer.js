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
                nonmotoristArr.push({})
            }

            return {
                ...state,
                nonmotorists: nonmotoristArr
            }
        default:
            return state;
    }
}