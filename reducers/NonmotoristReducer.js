var uuid = require('react-native-uuid');

const initialState = {
    data: []
}

export default function nonmotoristReducer (state=initialState, action) {
    switch (action.type) {
        case 'ADDNONMOTORIST':
            if(action.payload.constructor == Object && "id" in action.payload) {
              console.log("add nonmotorist " + action.payload.id);
              return {
                  ...state,
                  data: state.data.concat([{id: action.payload.id}])
              }
            } else {
              const numNonmotorist = action.payload;

              let nonmotoristArr = [];

              for (let i = 0; i < numNonmotorist; i++){
                  let id = uuid.v1();
                  nonmotoristArr.push({id})
              }

              return {
                  ...state,
                  data: nonmotoristArr
              }
            }

        case 'UPDATENONMOTORIST':
            const { id, question, selection } = action.payload
            let updatedState = state.data;
            let selectedNonmotorist = updatedState.find(nonmotorist => nonmotorist.id == id)
            if(selectedNonmotorist.response == undefined) {
                selectedNonmotorist.response = {}
            }
            selectedNonmotorist.response[question] = selection;
            // const { id, response } = action.payload
            // let newNonmotoristArr = state.nonmotorists.filter(nonmotorist => nonmotorist.id !=id).concat({id, response})
            // const currentResponse = state.nonmotorists.find(nonmotorist => nonmotorist.id == id).response
            // for (let[key,value] of Object.entries(currentResponse)){
            //     if (response[key] == null) {
            //         response[key] = value
            //     }
            // }

            return {
                ...state,
                data: updatedState
            }

        case 'DELETENONMOTORIST':
            const {nonmotoristID} = action.payload
            console.log("delete nonmotorist " + nonmotoristID);
            updatedState = state.data;
            return {
                ...state,
                data: updatedState.filter(nonmotorist => nonmotorist.id != nonmotoristID)
            }
        
        case 'RESETNONMOTORIST':
            console.log("RESET NONMOTORIST!");
            state = initialState;
            return {
                ...state,
            }

        default:
            return state;
    }
}
