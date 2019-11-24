import axios from 'axios'
import * as ActionTypes from './ActionTypes'
import { config } from '../config'

// Fetches movies from omdb api
export const fetchMovies = value => dispatch => {
    // Checks to see if a value was set. Not really needed but...
    if (value) {
        axios.get(`${config.url}/movies?value=${value}`) // Does a get request to the backend with the required params
             .then(res => {
                 if (res.status === 200) { // Checks to see if a response came back
                    if (res.data) { // Checks to see if any movies were found
                        dispatch({ // If found, insert movies into redux store
                            type: ActionTypes.INSERT_MOVIES,
                            payload: res.data // Found movies
                        })
                        dispatch({ // Also tick the api lookup amount up 1
                            type: ActionTypes.API_LOOKUP
                        })
                    }
                 } else {
                     console.error('An unknown error occured') // If the server responded with any other than 200, then maybe server is down?
                 }
             })
             .catch(err => console.error(err))
    }
}
