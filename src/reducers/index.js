import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import collectionsReducer from "./collectionsReducer";
import testsReducer from "./testsReducer";

export default combineReducers({
    collections: collectionsReducer,
    opened: testsReducer,
    active: 'id',
    users: usersReducer
})