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