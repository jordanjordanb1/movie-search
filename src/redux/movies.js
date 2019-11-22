import * as ActionTypes from './ActionTypes'

export const movies = (state = { moviesList: null }, action) => {
    switch(action.type) {
        case ActionTypes.INSERT_MOVIES:
            return { ...state, moviesList: action.payload }
        default: 
            return state
    }
}
