import {createStore,combineReducers, applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'


const Store = () => {
    const middlewares = composeWithDevTools(applyMiddleware())
    const reducers = combineReducers({

    })

    const store = createStore(reducers, middlewares)


    return store
}

const store = Store()

export default store