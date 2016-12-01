import React, { Component } from 'react';
import './App.css';
import Artists from './Artists';
import AutoComplete from 'material-ui/AutoComplete';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
    };
  }

  componentDidMount() {
    fetch('/artists.json')
      .then((response) => {
        return response.json();
      })
      .then((artists) => {
        return this.setState({
          artists: artists,
      });
    })
  }

  handleUpdateInput = (value, artists) => {
    if (value) {
        let matchedArtists = [];
        let searchArtists = this.state.artists;
        value = value.charAt(0).toUpperCase() + value.slice(1);
        for (var i = 0; i < searchArtists.length; i++) {
          if (searchArtists[i].first_name.includes(value) || searchArtists[i].last_name.includes(value)) {
            matchedArtists.push(searchArtists[i])
          }
        this.setState({
          artists: matchedArtists
        })
      }
    } else {
      this.componentDidMount()
    }
  };

  render() {
    if (this.state.artists !== 0) {
      return (
        <div className="App">
          <header className="App-header">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/IHeartRadio_logo.png" className="App-logo" alt="IHeartRadio logo" />
          </header>
          <form className="Section-form">
            <AutoComplete
              hintText={<span><i className="material-icons">search</i> Search artists...</span>}
              dataSource={this.state.artists}
              onUpdateInput={this.handleUpdateInput}
            />
          </form>
          <main className="Section-main">
            <Artists artists={this.state.artists} />
          </main>
        </div>
      );
    } else {
      return null
    }
  }
}

export default App;
