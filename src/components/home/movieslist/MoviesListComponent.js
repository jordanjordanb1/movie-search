import React, { PureComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NoMovies from './nomovies/NoMoviesComponent'

export default class MoviesList extends PureComponent {
    render() {
        return (
            <Row>
                <Col xs="12">
                    <NoMovies />
                </Col>
            </Row>
        )
    }
}
