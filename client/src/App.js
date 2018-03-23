import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './Components/InputForm'
import NavB from './Components/NavB';
import TabsNav from './Components/TabsNav';
import Analysis from './Components/Analysis';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to our project</h1>
        </header>
        <NavB/>
    <TabsNav search ={<InputForm/>} analysis={<Analysis/>} />
        
        
      </div>
    );
  }
}

export default App;
