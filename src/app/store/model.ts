import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'

import {isInitReducer} from "../../app-store-global/is-init";

import {sideBarReducer} from "widgets/side-bar";
import {dateReducer} from "widgets/months";

import {themeReducer} from "features/switch-theme";
import {userReducer} from "features/user";

const Store = () => {
    const middlewares = composeWithDevTools(applyMiddleware())
    const reducers = combineReducers({
        theme: themeReducer,
        user: userReducer,
        sideBar: sideBarReducer,
        date: dateReducer,
        isInit: isInitReducer,
    })

    const store = createStore(reducers, middlewares)


    return store
}

const store = Store()

export default store