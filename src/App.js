import React, { PureComponent } from 'react';
import { Provider } from 'react-redux'
import { ConfigureStore } from './redux/configureStore'
import './App.css';

// Configures the redux store
const store = ConfigureStore()

export default class App extends PureComponent  {
    render() {
        return (
            // <Provider> is for redux
            <Provider store={store}>

            </Provider>
        );
    }
}
