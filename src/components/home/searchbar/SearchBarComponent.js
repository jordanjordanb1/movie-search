import React, { PureComponent } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'

export default class SearchBar extends PureComponent {
    render() {
        return (
            <Row className="mt-4">
                <Col xs="12" md={{ span: 10, offset: 1 }} lg={{ span: 8, offset: 2 }}>
                    <Form>
                        <Form.Row>
                            <InputGroup className="mb-3">
                                <Form.Control type="search" placeholder="Search for a movie here..." />
                                <InputGroup.Prepend>
                                    <Button>Search</Button>
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Form.Row>
                    </Form>
                </Col>
            </Row>
        )
    }
}
