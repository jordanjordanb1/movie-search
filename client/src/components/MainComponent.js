import React, { PureComponent } from 'react'
import Home from './home/HomeComponent'
import Nav from './shared/nav/NavComponent'
import Loader from './shared/loader/LoaderComponent'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    isMoviesLoading: state.movies.isLoading,
    darkMode: state.dark.darkMode
})

class Main extends PureComponent {
    render() {
        const { darkMode } = this.props

        return (
            <>
                { this.props.isMoviesLoading ? <Loader dark={darkMode} /> : null }
                <Nav />
                <Home darkMode={darkMode} />
            </>
        )
    }
}

export default connect(mapStateToProps)(Main)
