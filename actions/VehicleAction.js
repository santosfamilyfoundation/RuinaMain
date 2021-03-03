export const addVehicle = numVehicle => {
    return {
        type: 'ADDVEHICLE',
        payload: numVehicle
    }
}

export const updateVehicle = vehicleData => {
    return {
        type: 'UPDATEVEHICLE',
        payload: vehicleData
    }
}
