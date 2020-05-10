import rootReducer from './rootReducer'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default createStore(
    rootReducer,
    applyMiddleware(promise, thunk, logger)
)