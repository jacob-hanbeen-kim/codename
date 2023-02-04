import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { activeTestReducer, openedTestReducer, allTestReducer } from "./testReducer";

export default combineReducers({
    collection: allTestReducer,
    opened: openedTestReducer,
    active: activeTestReducer,
    user: userReducer
})