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