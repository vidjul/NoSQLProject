import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Button } from 'reactstrap';
import Countries from './Countries';
import Diagram from './Diagram';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.state = {
            place: "Country",
            searchResForPeople: [],
            searchResForTopics: [],
            requestForPeople: null,
            requestForTopics: null,
            requestStatus: ''
        };
    }



    handleSearch() {
        var request = { "country": "", "data": "" };
        var request2 = { "country": "", "data": "" };
        if (this.state.place !== null) {
            request.country = this.state.place
            request2.country = this.state.place
        }
        else {
            request.country = "";
            request2.country = "";
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
            })
        request2.data = "topics";
        this.setState({ requestForTopics: request2 });
        axios.post('/analysis', request2)
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


    }

    handleSelect(e) {
        this.setState({ place:  e.target.textContent })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col><Diagram metric="Peoples" data={this.state.searchResForPeople} /></Col>
                    <Col><Diagram metric="Topics" data={this.state.searchResForTopics} /></Col>
                </Row>
                <Row>
                    <Col>
                        <Countries place={this.state.place} onSelectChange={this.handleSelect} style={{ marginBottom: '1rem' }} /><Button onClick={this.handleSearch} color="success" style={{ marginBottom: '1rem' }}>Search</Button>
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default InputForm;





