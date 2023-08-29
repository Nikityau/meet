import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga'

import {userReducer} from "../../entities/user-store";
import {userMiddleware} from "../../entities/user-store/user-middleware";

const sagaMiddleware = createSagaMiddleware()

const enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
)

const reducers = combineReducers({
    user: userReducer
})

const store = createStore(reducers, enhancers)
sagaMiddleware.run(userMiddleware)

export default store