import { createStore, combineReducers, applyMiddleware } from 'redux'

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import { movies } from './movies'
import { dark } from './dark'

export const ConfigureStore = () => {
    // This is for the redux Devtools to work correctly. Remove before building
    const compose = enhancer => {return enhancer},
          composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

    const store = createStore(
        combineReducers({
            movies,
            dark
        }),
        composeEnhancers(applyMiddleware(thunk, logger)) // Remove composeEnhancer before building, as well as redux thunk middleware
    )

    return store
}