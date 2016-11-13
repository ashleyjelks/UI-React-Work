import React, { Component } from 'react';
import Candidates from './Candidates';
import logo from './logo.svg';
import './App.css';
import AutoComplete from 'material-ui/AutoComplete';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };
  }

  componentDidMount() {
    fetch('/candidates.json')
      .then((response) => {
        return response.json();
      })
      .then((candidates) => {
        candidates.sort(function(a,b){
          if (a.grade > b.grade) {
            return 1;
          }
          if (a.grade < b.grade) {
            return -1;
          }
          return 0
        })
      return this.setState({
        candidates: candidates,
      });
    })
  }

  handleUpdateInput = (value, candidates) => {
    if (value) {
        let matchedCandidates = [];
        let searchCandidates = this.state.candidates;
        value = value.charAt(0).toUpperCase() + value.slice(1);
        for (var i = 0; i < searchCandidates.length; i++) {
          if (searchCandidates[i].first_name.includes(value) || searchCandidates[i].last_name.includes(value)) {
            matchedCandidates.push(searchCandidates[i])
          }
        this.setState({
          candidates: matchedCandidates
        })
      }
    } else {
      this.componentDidMount()
    }
  };

  render() {
    if (this.state.candidates !== 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="Restless Bandit logo" />
          </header>
          <form className="Section-form">
            <AutoComplete
              className="Searchbar"
              hintText={<span><i className="material-icons">search</i> Search candidates...</span>}
              dataSource={this.state.candidates}
              onUpdateInput={this.handleUpdateInput}
            />
          </form>
          <main className="Section-main">
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
