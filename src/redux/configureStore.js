import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () => {
    // This is for the redux Devtools to work correctly. Remove before building
    const compose = enhancer => {return enhancer},
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combineReducers({
            // Empty for now
        }),
        composeEnhancers(applyMiddleware(thunk, logger)) // Remove composeEnhancer before building, as well as redux thunk middleware
    )

    return store
}