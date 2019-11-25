import * as ActionTypes from './ActionTypes'

export const movies = (state = { moviesList: null, apiLookup: 0, isLoading: false }, action) => {
    switch(action.type) {
        case ActionTypes.INSERT_MOVIES:
            return { ...state, moviesList: action.payload, isLoading: false }
        case ActionTypes.MOVIES_LOADING:
            return { ...state, isLoading: true }
        case ActionTypes.API_LOOKUP:
            return { ...state, apiLookup: state.apiLookup + 1 }
        default: 
            return state
    }
}
