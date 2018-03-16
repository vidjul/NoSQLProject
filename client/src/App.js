import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputComponent from './Components/InputComponent';
import DatepickerComponent from './Components/DatepickerComponent';
import { Container, Row } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Container className="text-center">
          <Row>&emsp;Date :&emsp; <DatepickerComponent /></Row><br />
          <InputComponent fieldType="Exchanges" /><br />
          <InputComponent fieldType="Orgs" /><br />
          <InputComponent fieldType="People" /><br />
          <InputComponent fieldType="Places" />
        </Container>
      </div>
    );
  }
}

export default App;
