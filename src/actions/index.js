// Action Creator
// export const selectSong = (song) => {
//     // Return an action
//     return {
//         type: 'SONG_SELECTED',
//         payload: song
//     }
// }

// Example of using Middleware (redux-thunk()
// export const fetchPost = () => async dispatch => {
//     const response = await jsonPlaceholder.get('/posts');

//     dispatch({ type: 'FETCH_POSTS', payload: response });
// }

import { testService } from "../services/test-service";

export const fetchUser = (id) => async dispatch => {
    const response = await testService.getUserTests(id);

    dispatch({ type: 'FETCH_USER', payload: response });
}

let tests = {
    1: {
        id: '1',
        title: '/api/users',
        method: 'GET',
        url: 'https://localhost:3000/api/users',
        headers: null,
        body: null
    },
    // pm360: [

    //     { title: '/api/reports', method: 'GET', id: '2' }
    // ],
    // policy: [
    //     { title: '/api/users', method: 'GET', id: '3' },
    //     { title: '/api/users/{id}', method: 'PUT', id: '4' },
    //     { title: '/api/users/{id}', method: 'DELETE', id: '8' }
    // ],
    // parkmobile: [
    //     { title: '/api/users', method: 'GET', id: '5' },
    //     { title: '/api/users', method: 'POST', id: '6' },
    //     { title: '/api/users/{id}', method: 'GET', id: '7' }
    // ]
}

/**
 * TODO: replace with actual api call like above example
 * @param testId 
 * @returns 
 */
export const fetchTest = (testId) => {
    return {
        type: 'FETCH_TEST',
        payload: tests[testId]
    }
}