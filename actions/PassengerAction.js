export const addPassenger = numPassenger => {
    return {
        type: 'ADDPASSENGER',
        payload: numPassenger
    }
}

export const updatePassenger = passengerData => {
    return {
        type: 'UPDATEPASSENGER',
        payload: passengerData
    }
}

export const deletePassenger = passengerID => {
    return {
        type: 'DELETEPASSENGER',
        payload: passengerID
    }
}

export const resetPassenger = () => {
    return {
        type: 'RESETPASSENGER'
    }
}