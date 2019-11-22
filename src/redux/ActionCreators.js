import axios from 'axios'
import * as ActionTypes from './ActionTypes'

export const fetchMovies = value => dispatch => {
    const omdb_api_key = process.env.OMDBAPI_KEY || "ab8a3aca"

    if (value) {
        axios.get(`http://www.omdbapi.com/?apikey=${omdb_api_key}&s=${value}`)
             .then(res => {
                 if (res.status === 200) {
                    dispatch({
                        type: ActionTypes.INSERT_MOVIES,
                        payload: res.data.Search
                    })
                 } else {
                     console.error('An unknown error occured')
                 }
             })
    }
}
