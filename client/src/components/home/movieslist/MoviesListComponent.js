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
})

class MoviesList extends PureComponent {
    renderMovies() {
        const movies = this.props.moviesList

        // Title,Year,Poster,imdbID

        if (movies) {
            return movies.map((movie, index) => {
                return (
                    <Card className="m-3 movie-card" key={index}>
                        <Card.Header className="d-flex justify-content-center">
                            <Card.Img variant="top" alt={movie.Title} src={movie.Poster !== 'N/A' ? movie.Poster : ImageNotFound} />
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
                <div className="no-movie-found">
                    <h1>No movies were found!</h1>
                </div>
            )
        }
    }

    render() {
        return (
            <Row>
                <Col xs="12" style={{flexWrap: "wrap"}} className={ this.props.moviesList ? 'd-flex justify-content-center' : '' }>
                    { !this.props.apiLookup ? <NoMovies /> : this.renderMovies() }
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(MoviesList)
