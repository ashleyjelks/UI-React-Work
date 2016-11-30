import React, { Component } from 'react';
import './App.css';

class App extends Component {

  componentDidMount() {
    fetch('/artists.json')
      .then((response) => {
        return response.json();
      })
      .then((artists) => {
        console.log(artists);
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/IHeartRadio_logo.png" className="App-logo" alt="IHeartRadio logo" />
        </header>
      </div>
    );
  }
}

export default App;
