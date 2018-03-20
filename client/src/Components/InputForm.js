import React, { Component } from 'react';
import axios from 'axios';
import InputComponent from './InputComponent';
import DatepickerComponent from './DatepickerComponent';
import { Container, Row, Col, Button } from 'reactstrap';
import ArticleList from './ArticleList';



class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onPaginatedSearch = this.onPaginatedSearch.bind(this);
        this.state = {
            date: {
                value: null,
                queryType: 'should',
            },
            topic: {
                value: '',
                queryType: 'should'
            },
            body: {
                value: '',
                queryType: 'should'
            },
            people: {
                value: '',
                queryType: 'should'
            },
            places: {
                value: '',
                queryType: 'should'
            },
            searchRes: null,
            pageCount: 1,
            request: ''
        };
    }

    handleChange(e) {
        const prevType = this.state[e.target.name.toLowerCase()].queryType
        this.setState({ [e.target.name.toLowerCase()]: { 'value': e.target.value, 'queryType': prevType } });
    }

    handleSelect(e) {
        const prevValue = this.state[e.target.name.toLowerCase()].value;
        this.setState({ [e.target.name.toLowerCase()]: { 'value': prevValue, 'queryType': e.target.textContent } })
    }

    handleDate(date) {
        const prevType = this.state.date.queryType
        this.setState({ date: { 'value': date, 'queryType': prevType } })
    }

    handleSearch() {
        let request = { 'must': [], 'should': [] };
        for (let key in this.state) {
            if (this.state.hasOwnProperty(key) && !['searchRes', 'pageCount', 'request'].includes(key)) {
                if (this.state[key].queryType === 'must') {
                    if (key === 'date') {
                        if (this.state[key].value) {
                            request.must.push([key, this.state[key].value.format('D-MMM-YYYY'), 0]);
                        }
                        else {
                            request.must.push([key, "", 0]);
                        }
                    }
                    else {
                        request.must.push([key, this.state[key].value, 0]);
                    }

                }
                else {
                    if (key === 'date') {
                        if (this.state[key].value) {
                            request.should.push([key, this.state[key].value.format('D-MMM-YYYY'), 0]);
                        }
                        else {
                            request.should.push([key, "", 0]);
                        }
                    }
                    else {
                        request.should.push([key, this.state[key].value, 0])
                    }
                }
            }
        }
        this.setState({request: request});
        axios.post('/article', request)
            .then((res) => {
                this.setState({searchRes: res.data});
            })
            .catch((err) => console.log(err));
    }

    onPaginatedSearch() {
        axios.post(`/article/?page=${this.state.pageCount}`, this.state.request)
        .then((res) => {
            this.setState({searchRes: this.state.searchRes.concat(res.data)});
        })
        .catch((err) => console.log(err));
        this.setState({pageCount: this.state.pageCount + 1})
    }

    render() {
        return (
            <Container>
                <Row>
                    <DatepickerComponent date={this.state.date.value} onFieldChange={this.handleDate} onSelectChange={this.handleSelect} dropValue={this.state.date.queryType} />
                </Row>
                <br />
                <Row>
                    <InputComponent fieldType="Text.Topic" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.topic.queryType} />
                </Row>
                <br />
                <Row>
                    <InputComponent fieldType="Body" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.body.queryType} />
                </Row>
                <br />
                <Row>
                    <InputComponent fieldType="People" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.people.queryType} />
                </Row>
                <br />
                <Row>
                    <InputComponent fieldType="Places" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.places.queryType} />
                </Row>
                <br />
                <Row>
                    <Col>
                        <Button onClick={this.handleSearch} style={{ marginBottom: '1rem' }}>Search</Button>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ArticleList searchRes={this.state.searchRes} onPaginatedSearch={this.onPaginatedSearch} />
                    </Col>
                </Row>

            </Container>
        );
    }
}

export default InputForm;