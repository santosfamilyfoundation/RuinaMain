const initialState = {
    numVehicle: 0,
    numPerson: 0,
    fatality: false,
    construction: false,
    intersection: false,
    schoolbus: false,
    hazardous: false
  }
  
export default function quickquizReducer (state = initialState, action) {
switch (action.type) {
    case 'VEHICLE':
        return {
            ...state,
            numVehicle: action.numVehicle
        }
    case 'PERSON':
        return {
            ...state,
            numPerson: action.numPerson
        }
    case 'FATALITY':
        return {
            ...state,
            fatality: action.fatality
        }
    case 'CONSTRUCTION':
        return {
            ...state,
            construction: action.construction
        }
    case 'INTERSECTION':
        return {
            ...state,
            intersection: action.intersection
        }
    case 'SCHOOLBUS':
        return {
            ...state,
            schoolbus: action.schoolbus
        }
    case 'HAZARDOUS':
        return {
            ...state,
            hazardous: action.hazardous
        }
    default:
    return state
}
}