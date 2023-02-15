export const activeTestReducer = (state = 0, action) => {
    switch (action.type) {
        case 'FETCH_TEST':
            return action.payload.id;
        case 'CREATE_TEMP_TEST':
            return action.payload.id;
        case 'SET_ACTIVE_TEST':
            return action.payload.id;
        default:
            return state
    }
}

export const openedTestReducer = (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TEST':
            return { ...state, [action.payload.id]: action.payload };
        case 'CREATE_TEMP_TEST':
            return { ...state, [action.payload.id]: action.payload };
        case 'SAVE_TEST':
            return { ...state, [action.payload.savedTest.id]: action.payload.savedTest };
        default:
            return state
    }
}

export const allTestReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_TESTS':
            return [...action.payload];
        case 'SAVE_TEST':
            return [...action.payload.tests];
        default:
            return state
    }
}