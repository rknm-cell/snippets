import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { wordReducer } from './reducers'

const rootReducer = combineReducers({wordReducer})

export const Store = createStore(rootReducer, applyMiddleware)