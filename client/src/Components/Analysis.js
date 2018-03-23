import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col,Button } from 'reactstrap';
import Countries from './Countries';


class InputForm extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <Container>
                <Row>
                    <Col xs="6">.Ici le graph de topics</Col>
                    <Col xs="6">.ici le graph de people</Col>
                </Row>
                <Row>
                    <Col>
                        <Countries/><Button color="success"  style={{ marginBottom: '1rem' }}>Search</Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default InputForm;





