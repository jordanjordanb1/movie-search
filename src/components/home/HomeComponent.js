import React, { PureComponent } from 'react'
import './HomeComponent.css'
import Container from 'react-bootstrap/Container'
import SearchBar from './searchbar/SearchBarComponent'
import MoviesList from './movieslist/MoviesListComponent'

export default class Home extends PureComponent {
    render() {
        return (
            <Container>
                <SearchBar />
                <MoviesList />
            </Container>
        )
    }
}
