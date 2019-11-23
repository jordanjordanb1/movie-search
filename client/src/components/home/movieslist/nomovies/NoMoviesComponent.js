import React, { PureComponent } from 'react'
import './NoMoviesComponent.css'

export default class NoMovies extends PureComponent {
    render() {
        return (
            <div className="no-movie">
                <h1>Please search for a movie first</h1>
            </div>
        )
    }
}
