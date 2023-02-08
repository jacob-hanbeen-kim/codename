import { combineReducers } from "redux";
import userReducer from "./userReducer";

import { activeTestReducer, openedTestReducer, allTestReducer } from "./testReducer";
import { allExecutionReducer, openedExecutionReducer } from './executionReducer';

export default combineReducers({
    collection: allTestReducer,
    opened: openedTestReducer,
    active: activeTestReducer,

    openedExecutioin: openedExecutionReducer,
    executions: allExecutionReducer,

    user: userReducer
})