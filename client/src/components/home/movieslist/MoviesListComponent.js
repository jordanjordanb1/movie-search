  
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NoMovies from './nomovies/NoMoviesComponent'
import Button from 'react-bootstrap/Button'
import './MoviesListComponent.css'
import ImageNotFound from './not-found.png'

const mapStateToProps = state => ({
    moviesList: state.movies.moviesList,
    apiLookup: state.movies.apiLookup,
    darkMode: state.dark.darkMode
})

class MoviesList extends PureComponent {
    renderMovies() {
        const { moviesList, darkMode } = this.props

        if (moviesList) {
            return moviesList.map((movie, index) => {
                return (
                    <Card className="m-3 movie-card" key={index}>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Img variant="top" className="img-fluid" alt={movie.Title} src={movie.Poster !== 'N/A' ? movie.Poster : ImageNotFound} />
                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>Year: {movie.Year}</Card.Text>
                            <a target="_blank" rel="noopener noreferrer" href={`https://www.imdb.com/title/${movie.imdbID}`}><Button>View on IMDB</Button></a>
                        </Card.Body>
                    </Card>
                ) 
            })
        } else {
            return (
                <div className={ darkMode ? 'no-movie-found no-movie-dark' : 'no-movie-found' }>
                    <h1>No movies were found!</h1>
                </div>
            )
        }
    }

    render() {
        const { darkMode, moviesList, apiLookup } = this.props

        return (
            <Row>
                <Col xs="12" className={ moviesList ? 'd-flex justify-content-center flex-wrap' : 'flex-wrap' }>
                    { !apiLookup ? <NoMovies darkMode={darkMode} /> : this.renderMovies() }
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(MoviesList)