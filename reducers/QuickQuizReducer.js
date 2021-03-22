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
        console.log('action.numVehicle', action.numVehicle)
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
      console.log('UPDATESETUP', action.payload)
      const { question, selection } = action.payload;
      let updatedState = state.setupData;
      updatedState[question] = selection;
      // console.log(updatedState);
      return {
          ...state,
          setupData: updatedState
      }
    default:
      return state
    }
}
