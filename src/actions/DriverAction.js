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

export const deleteDriver = driverID => {
    return {
        type: 'DELETEDRIVER',
        payload: driverID
    }
}

export const resetDriver = () => {
    return {
        type: 'RESETDRIVER'
    }
}
