import React, { Component } from 'react';
import Candidates from './Candidates';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: []
    };
  }

  componentDidMount() {
    fetch('/candidates.json')
      .then((response) => {
        return response.json();
      })
      .then((candidates) => {
        console.log(candidates);
        candidates.sort(function(a,b){
          if (a.grade > b.grade) {
            return 1;
          }
          if (a.grade < b.grade) {
            return -1;
          }
          return 0
        })
        return this.setState({candidates: candidates});
      })
  }

  render() {
    if (this.state.candidates !== 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="Restless Bandit logo" />
          </header>
          <main>
            <Candidates candidates={this.state.candidates} />
          </main>
        </div>
      );
    } else {
      return null
    }
  }
}

export default App;
