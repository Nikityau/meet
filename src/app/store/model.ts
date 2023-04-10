import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'

import {sideBarReducer} from "widgets/side-bar";

import {themeReducer} from "features/switch-theme";
import {userReducer} from "features/user";

const Store = () => {
    const middlewares = composeWithDevTools(applyMiddleware())
    const reducers = combineReducers({
        theme: themeReducer,
        user: userReducer,
        sideBar: sideBarReducer
    })

    const store = createStore(reducers, middlewares)


    return store
}

const store = Store()

export default store