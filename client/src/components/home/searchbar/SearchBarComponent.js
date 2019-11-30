import React, { PureComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import { connect } from 'react-redux'
import { fetchMovies } from '../../../redux/ActionCreators'

import './SearchBarComponent.css'

const mapStateToProps = state => ({
    darkMode: state.dark.darkMode
})

const mapDispatchToProps = dispatch => ({
    fetchMovies: value => dispatch(fetchMovies(value))
})

class SearchBar extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            searchValue: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()

        this.props.fetchMovies(this.state.searchValue)

        return this.setState({ searchValue: '' })
    }

    render() {
        const { darkMode } = this.props

        return (
            <Row className={ darkMode ? 'mt-4 search-dark' : 'mt-4' }>
                <Col xs="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Row>
                            <InputGroup className="mb-3">
                                <Form.Control type="search" placeholder="Search for a movie here..." value={this.state.searchValue} onChange={e => this.setState({ searchValue: e.target.value })} />
                                <InputGroup.Prepend>
                                    <Button className="search-btn">Search</Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
