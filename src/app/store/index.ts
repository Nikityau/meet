import {combineReducers, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import createSagaMiddleware from 'redux-saga'
import {userReducer} from "../../redux/user-store";
import {userMiddleware} from "../../redux/user-store/user-middleware";
import {themeReducer} from "../../redux/theme-store";



const sagaMiddleware = createSagaMiddleware()

const enhancers = composeWithDevTools(
    applyMiddleware(sagaMiddleware)
)

const reducers = combineReducers({
    user: userReducer,
    theme: themeReducer
})

const store = createStore(reducers, enhancers)
sagaMiddleware.run(userMiddleware)

export default store