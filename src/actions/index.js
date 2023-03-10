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

import { fetchUser } from "./userAction"
import { fetchTest, fetchTests, saveTest, createTemporaryTest, changeActiveTest, closeTest } from "./testAction"
import { fetchExecutionById, fetchAllExecutions, createExecutionHistory } from './executionActioin'

export {
    fetchUser,

    fetchTest,
    fetchTests,
    saveTest,
    createTemporaryTest,
    changeActiveTest,
    closeTest,

    fetchExecutionById,
    fetchAllExecutions,
    createExecutionHistory
}