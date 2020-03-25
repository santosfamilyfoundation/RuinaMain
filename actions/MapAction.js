export const changeLat = req => {
    return {
        type: 'UPDATEMAPLAT',
        payload: req,
    }
};

export const changeLong = req => {
    return {
        type: 'UPDATEMAPLONG',
        payload: req,
    }
};

export const updateMarkers = req => {
    return {
        type: 'UPDATEMARKERS',
        payload: req,
    }
};
