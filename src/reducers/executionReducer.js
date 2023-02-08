export const openedExecutionReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_EXECUTION':
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state
    }
}

export const allExecutionReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL_EXECUTIONS':
            return action.payload;
        default:
            return state
    }
}