import React, { PureComponent } from 'react'
import './HeaderComponent.css'
import Navbar from 'react-bootstrap/Navbar'

export default class Header extends PureComponent {
    render() {
        return (
            <Navbar bg="dark">
                <Navbar.Brand href="#" className="text-white">Movie Search</Navbar.Brand>
                <div className="ml-auto">
                    <a href="https://github.com/jordanjordanb1/movie-search" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github github-icon"></i>
                    </a>
                </div>
            </Navbar>
        )
    }
}
