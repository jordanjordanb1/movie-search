import React, { PureComponent } from 'react'
import Container from 'react-bootstrap/Container'
import SearchBar from './searchbar/SearchBarComponent'
import MoviesList from './movieslist/MoviesListComponent'

export default class Home extends PureComponent {
    render() {
        return (
            <div>
                <Container>
                    <SearchBar />
                    <MoviesList />
                </Container>
            </div>
        )
    }
}
