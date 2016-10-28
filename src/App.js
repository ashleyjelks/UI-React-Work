import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/candidates.json')
      .then((response) => {
        return response.json();
      })
      .then((candidates) => {
        console.log(candidates);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Restless Bandit logo" />
        </header>
      </div>
    );
  }
}

export default App;
