import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import Countries from './Countries';
import Diagram from './Diagram';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.state = {
            place: "france",
            searchResForPeople: [],
            searchResForTopics: [],
            requestForPeople: null,
            requestForTopics: null,
            requestStatus: ''
        };
    }



    handleSearch() {
        var request = { "country": "", "data": "" };
        if (this.state.place !== null) {
            request.country = this.state.place
        }
        else {
            request.country = "";
        }

        request.data = "people";
        this.setState({ requestForPeople: request });
        axios.post('/analysis', request)
            .then((res) => {
                this.setState({
                    searchResForPeople: res.data,
                    requestStatus: 'loaded'
                });
            })
            .catch((err) => {
                console.log(err);
                this.setState({
                    requestStatus: 'error'
                })
            }).then(() => {
            request.data = "topics";
                this.setState({ requestForTopics: request });
                axios.post('/analysis', request)
                    .then((res) => {
                        this.setState({
                            searchResForTopics: res.data,
                            requestStatus: 'loaded'
                        });
                    })
                    .catch((err) => {
                        this.setState({
                            requestStatus: 'error'
                        })
                    });
            });

    }

    render() {
        return (
            <Container>
                <Row>
                    <Col><Diagram data={this.state.searchResForPeople} /></Col>
                    <Col><Diagram data={this.state.searchResForTopics} /></Col>
                </Row>
                <Row>
                    <Col>
                        <Countries /><Button onClick={this.handleSearch} color="success" style={{ marginBottom: '1rem' }}>Search</Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default InputForm;





