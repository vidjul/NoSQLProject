import React, { Component } from 'react';
import axios from 'axios';
import InputComponent from './InputComponent';
import DatepickerComponent from './DatepickerComponent';
import { Container, Row, Col, Button } from 'reactstrap';
import ArticleList from './ArticleList';
import Spinner from 'react-spinkit';



class InputForm extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDate = this.handleDate.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.onPaginatedSearch = this.onPaginatedSearch.bind(this);
        this.state = {
            'text.title': {
                value: '',
                queryType: 'should'
            },
            date: {
                value: null,
                queryType: 'should',
            },
            topics: {
                value: '',
                queryType: 'should'
            },
            'text.body': {
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
            request: '',
            requestStatus: '',
            indexStatus: ''
        };
    }

    componentDidMount() {
        axios.get('/article/populate')
            .then((res) => {
                this.setState({ indexStatus: res.data.status })
            })
            .catch((err) => {
                this.setState({ indexStatus: err.response.data })
            })
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
            if (this.state.hasOwnProperty(key) && !['searchRes', 'pageCount', 'request', 'requestStatus', 'indexStatus'].includes(key)) {
                if (this.state[key].queryType === 'must') {
                    if (key === 'date') {
                        if (this.state[key].value) {
                            request.must.push([key, this.state[key].value.format('D-MMM-YYYY'), 1]);
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
                            request.should.push([key, this.state[key].value.format('D-MMM-YYYY'), 1]);
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
        this.setState({ request: request });
        axios.post('/article', request)
            .then((res) => {
                this.setState({
                    searchRes: res.data,
                    requestStatus: 'loaded'
                });
            })
            .catch((err) => {
                this.setState({
                    searchRes: err.response.data,
                    requestStatus: 'error'
                })
            });
    }

    onPaginatedSearch() {
        axios.post(`/article/?page=${this.state.pageCount}`, this.state.request)
            .then((res) => {
                this.setState({
                    searchRes: this.state.searchRes.concat(res.data),
                    requestStatus: 'loaded'
                });
            })
            .catch((err) => {
                this.setState({
                    searchRes: err.response.data,
                    requestStatus: 'error'
                })
            });
        this.setState({ pageCount: this.state.pageCount + 1 })
    }

    render() {
        switch (this.state.indexStatus) {
            case 'exists':
                return (
                    <Container>
                        <Row><Col>
                            <DatepickerComponent date={this.state.date.value} onFieldChange={this.handleDate} onSelectChange={this.handleSelect} dropValue={this.state.date.queryType} />
                        </Col></Row>
                        <br />

                        <Row><Col>
                            <InputComponent fieldType="Text.Title" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state['text.title'].queryType} />
                        </Col></Row>
                        <br />
                        <Row><Col>
                            <InputComponent fieldType="Text.Body" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state['text.body'].queryType} />
                        </Col></Row>
                        <br />
                        <Row><Col>
                            <InputComponent fieldType="Places" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.places.queryType} />
                        </Col></Row>
                        <br />
                        <Row><Col>
                            <InputComponent fieldType="Topics" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.topics.queryType} />
                        </Col></Row>
                        <br />
                        <Row><Col>
                            <InputComponent fieldType="People" onFieldChange={this.handleChange} onSelectChange={this.handleSelect} dropValue={this.state.people.queryType} />
                        </Col></Row>
                        <br />
                        <Row>
                            <Col>
                                <Button color="success" onClick={this.handleSearch} style={{ marginBottom: '1rem' }}>Search</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <ArticleList searchRes={this.state.searchRes} reqStatus={this.state.requestStatus} onPaginatedSearch={this.onPaginatedSearch} />
                            </Col>
                        </Row>

                    </Container>
                );
            default:
                return (
                    <Container>
                        <Row>
                            <Col xs=".col-6 .col-sm-4" md={{ size: 5, offset: 1 }}/>
                                <Spinner position="center" name="pacman" color="goldenrod" />                         
                        </Row>
                        <br />
                        <Row>
                            <Col>
                                <p> Data is being indexed, please wait, it may take arround one minute </p>
                                <p> If it last longer, make sure you have started the server and that elasticsearch is running</p>
                            </Col>
                        </Row>
                    </Container>
                );
        }
    }
}

export default InputForm;

