import React, { PureComponent } from 'react'
import './MainComponent.css'
import Home from './home/HomeComponent'
import Header from './shared/header/HeaderComponent'
import Loader from './shared/loader/LoaderComponent'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    isMoviesLoading: state.movies.isLoading
})

class Main extends PureComponent {
    render() {
        return (
            <>
                { this.props.isMoviesLoading ? <Loader /> : null }
                <Header />
                <Home />
            </>
        )
    }
}

export default connect(mapStateToProps)(Main)
