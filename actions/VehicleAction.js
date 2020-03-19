export const addVehicle = numVehicle => {
    return {
        type: 'ADDVEHICLE',
        payload: numVehicle
    }
}

export const addLvhm = numLvhm => {
    return {
        type: 'ADDLVHM',
        payload: numLvhm
    }
}

export const updateVehicle = vehicleData => {
    return {
        type: 'UPDATEVEHICLE',
        payload: vehicleData
    }
}