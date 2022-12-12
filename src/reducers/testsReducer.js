export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_TEST':
            return { ...state, [action.payload.id]: action.payload };
        default:
            return state
    }
}