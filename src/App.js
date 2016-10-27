import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  fetchCandidates() {
    fetch('/candidates.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(candidates) {
        console.log(candidates);
      });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
