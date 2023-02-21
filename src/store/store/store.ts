import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from '@redux-devtools/extension'

import {rootReducer} from "../reducer/root.reducer";

const enhancers = composeWithDevTools(applyMiddleware())

const configureStore = () => {
    const store = createStore(rootReducer, enhancers)


    return store
}


export default configureStore()