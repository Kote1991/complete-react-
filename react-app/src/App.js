import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Customer from './components/customer';
import Employee from './components/employee';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <Customer /> */}
        <Employee/>
        
      </div>
    );
  }
}

export default App;
