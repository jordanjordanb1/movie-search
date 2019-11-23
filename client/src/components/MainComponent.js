import React, { PureComponent } from 'react'
import './MainComponent.css'
import Home from './home/HomeComponent'
import Header from './shared/header/HeaderComponent'

export default class Main extends PureComponent {
    render() {
        return (
            <>
                <Header />
                <Home />
            </>
        )
    }
}
