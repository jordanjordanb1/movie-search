import * as ActionTypes from './ActionTypes'

export const dark = (state = { darkMode: false }, action) => {
    switch(action.type) {
        case ActionTypes.TOGGLE_DARK_MODE:
            return { ...state, darkMode: !state.darkMode }
        default: 
            return state
    }
}
