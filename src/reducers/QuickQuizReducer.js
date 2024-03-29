const initialState = {
    numVehicle: '',
    numDriver: '',
    numNonmotorist:'',
    numPassenger:'',
    fatality: false,
    nonFatalInjury: false,
    photos: false,
    setupData: {},
    hasResponded: false
  }

export default function quickquizReducer (state = initialState, action) {
switch (action.type) {
    case 'VEHICLE':
        return {
            ...state,
            numVehicle: action.numVehicle
        }
    case 'DRIVER':
        return {
            ...state,
            numDriver: action.numDriver
        }
    case 'NONMOTORIST':
        return {
            ...state,
            numNonmotorist: action.numNonmotorist
        }
    case 'PASSENGER':
        return {
            ...state,
            numPassenger: action.numPassenger
        }
    // might not need
    case 'FATALITY':
        return {
            ...state,
            fatality: action.fatality
        }
    // might not need
    case 'NONFATALINJURY':
      return {
        ...state,
        nonFatalInjury: action.nonFatalInjury
      }
    case 'PHOTOS':
      return {
        ...state,
        photos: action.photos
      }
    case 'RESPOND':
        return {
            ...state,
            hasResponded: true
        }
    case 'UPDATESETUP':
      const { question, selection } = action.payload;
      console.log('question in update setup:', question);
      console.log('response in update setup:', selection);
      let updatedState = state.setupData;
      updatedState[question] = selection;
      // console.log(updatedState);
      return {
          ...state,
          setupData: updatedState
      }

    case 'RESETQUIZ':
        console.log("RESET QUIZ!");
        state = initialState;
        return {
            ...state,
            setupData: {}
        }
    default:
      return state
    }
}
