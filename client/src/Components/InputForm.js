import React, { Component } from 'react';
import InputComponent from './InputComponent';
import DatepickerComponent from './DatepickerComponent';
import { Container, Row, Col, Button } from 'reactstrap';


class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.state = {
            date: null,
            exchanges: '',
            orgs: '',
            people: '',
            places: '',
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name.toLowerCase()]: e.target.value });
    }

    handleDate(date) {
        this.setState({ date: date })
    }

    handleSearch() {
        console.log(this.state);
        console.log(this.state.date.format('D-MMM-YYYY'));
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <DatepickerComponent date={this.state.date} onFieldChange={this.handleDate} />
                    </Col>
                    <Col><InputComponent fieldType="Exchanges" onFieldChange={this.handleChange} /></Col>
                    <Col><InputComponent fieldType="Orgs" onFieldChange={this.handleChange} /></Col>
                    <Col><InputComponent fieldType="People" onFieldChange={this.handleChange} /></Col>
                    <Col><InputComponent fieldType="Places" onFieldChange={this.handleChange} /></Col>
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button onClick={this.handleSearch}>Search</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default InputForm;