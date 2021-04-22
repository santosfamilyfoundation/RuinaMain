export const updateRoad = roadData => {
    return {
        type: 'UPDATEROAD',
        payload: roadData
    }
}

export const addRoad = data => {
    return {
        type: 'ADDROAD',
        payload: data
    }
}

export const resetRoad = () => {
    return {
        type: 'RESETROAD'
    }
}
