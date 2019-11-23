import axios from 'axios'
import * as ActionTypes from './ActionTypes'

export const fetchMovies = value => dispatch => {
    const omdb_api_key = 'ab8a3aca'

    if (value) {
        axios.get(`http://www.omdbapi.com/?apikey=${omdb_api_key}&s=${value}`)
             .then(res => {
                 if (res.status === 200) {
                    if (res.data) {
                        dispatch({
                            type: ActionTypes.INSERT_MOVIES,
                            payload: res.data.Search
                        })
                        dispatch({
                            type: ActionTypes.API_LOOKUP
                        })
                    }
                 } else {
                     console.error('An unknown error occured')
                 }
             })
    }
}
