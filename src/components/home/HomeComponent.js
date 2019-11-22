import React, { PureComponent } from 'react'
import './HomeComponent.css'
import Container from 'react-bootstrap/Container'
import SearchBar from './searchbar/SearchBarComponent'

export default class Home extends PureComponent {
    render() {
        return (
            <Container>
                <SearchBar />
            </Container>
        )
    }
}
