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

export const deleteVehicle = vehicleID => {
    return {
        type: 'DELETEVEHICLE',
        payload: vehicleID
    }
}
