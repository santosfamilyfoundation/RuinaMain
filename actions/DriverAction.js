export const addDriver = numDriver => {
    return {
        type: 'ADDDRIVER',
        payload: numDriver
    }
}

export const updateDriver = driverData => {
    return {
        type: 'UPDATEDRIVER',
        payload: driverData
    }
}