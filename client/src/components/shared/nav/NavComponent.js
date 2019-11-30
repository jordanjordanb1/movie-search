import React from 'react'
import { connect } from 'react-redux'
import './NavComponent.css'
import Navbar from 'react-bootstrap/Navbar'
import { toggleDarkMode } from '../../../redux/ActionCreators'

const mapDispatchToProps = dispatch => ({
    toggleDarkMode: () => dispatch(toggleDarkMode())
})

const mapStateToProps = state => ({
    darkMode: state.dark.darkMode
})

const Nav = ({ toggleDarkMode, darkMode }) => (
    <Navbar bg={ darkMode ? 'dark' : null } className={darkMode ? 'dark-mode' : null} >
        <Navbar.Brand href="#" className={ darkMode ? 'text-white' : 'text-dark' }>Movie Search</Navbar.Brand>
        <div className="ml-auto d-flex">
            <div className="mr-4 dark-mode-button" onClick={() => toggleDarkMode()}>
                <span><i className="far fa-moon"></i> Dark Mode</span>
            </div>
            <a href="https://github.com/jordanjordanb1/movie-search" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github github-icon"></i>
            </a>
        </div>
    </Navbar>
)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
