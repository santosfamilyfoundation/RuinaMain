export const genericWriteAction = req => {
    return {
        type: req.actionType,
        field: req.field,
        payload: req.content,
    }
};