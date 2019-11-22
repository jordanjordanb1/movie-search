import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import NoMovies from './nomovies/NoMoviesComponent'
import './MoviesListComponent.css'

const mapStateToProps = state => ({
    moviesList: state.movies.moviesList
})

class MoviesList extends PureComponent {
    renderMovies() {
        const movies = this.props.moviesList

        // Title,Year,Poster,imdbID

        if (movies) {
            return movies.map((movie, index) => {
                return (
                    <Card className="m-3 movie-card" key={index}>
                        <Card.Img variant="top" alt={movie.Title} src={movie.Poster} />
                        <Card.Body>
                            <Card.Title>{movie.Title}</Card.Title>
                            <Card.Text>Year: {movie.Year}</Card.Text>
                        </Card.Body>
                    </Card>
                ) 
            })
        }
    }

    render() {
        return (
            <Row>
                <Col xs="12" style={{flexWrap: "wrap"}} className={ this.props.moviesList ? 'd-flex justify-content-center' : '' }>
                    { !this.props.moviesList ? <NoMovies /> : this.renderMovies() }
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps)(MoviesList)
