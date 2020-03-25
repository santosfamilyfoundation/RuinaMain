export const addNonmotorist = numNonmotorist => {
    return {
        type: 'ADDNONMOTORIST',
        payload: numNonmotorist
    }
}

export const updateNonmotorist = nonmotoristData => {
    return {
        type: 'UPDATENONMOTORIST',
        payload: nonmotoristData
    }
}