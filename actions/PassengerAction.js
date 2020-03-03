export const addPassenger = numPassenger => {
    return {
        type: 'ADDPASSENGER',
        payload: numPassenger
    }
}