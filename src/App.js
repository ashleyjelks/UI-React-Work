import React, { Component } from 'react';
import './App.css';
import Artists from './Artists';
import NavBar from './Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      searchedArtists: []
    };
    this.handleSearch = this.handleSearch.bind(this);
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
  };
  handleSearch(searchInput) {
    fetch(`http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=${searchInput}&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    }).then((response) => {
      return response.json()
    }).then((response) => {
      let searchResults = response.artists;
      let firstSixSearchResults = []
      for (let i = 0; i < 6; i++) {
        firstSixSearchResults.push(searchResults[i])
      }
      return this.setState({
        searchedArtists: firstSixSearchResults
      })
    })
  }
  handleUpdateInput = (value, artists) => {
    if (value) {
        let matchedArtists = [];
        let searchedArtists = this.state.artists;
        value = value.charAt(0).toUpperCase() + value.slice(1);
        for (var i = 0; i < searchedArtists.length; i++) {
          if (searchedArtists[i].first_name.includes(value) || searchedArtists[i].last_name.includes(value)) {
            matchedArtists.push(searchedArtists[i])
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
    return (
      <div className="App">
        <header className="App-header">
          <NavBar handleSearch={this.handleSearch} />
        </header>
        <main className="Section-main">
          <Artists artists={this.state.artists} />
        </main>
      </div>
    );
  }
}

export default App;
