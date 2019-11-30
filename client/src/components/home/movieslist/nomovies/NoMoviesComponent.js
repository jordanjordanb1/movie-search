import React from 'react'
import './NoMoviesComponent.css'

export default function NoMovies({ darkMode }) {
    return (
        <div className={ darkMode ? 'no-movie no-movie-dark' : 'no-movie' }>
            <h1>Please search for a movie first</h1>
        </div>
    )
}
