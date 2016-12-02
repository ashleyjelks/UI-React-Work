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
      let limitedSearchResults = []
      if (searchResults.length >= 6) {
        for (let i = 0; i < 6; i++) {
          limitedSearchResults.push(searchResults[i])
        }
      } else {
        for (let i = 0; i < searchResults.length; i++) {
          limitedSearchResults.push(searchResults[i])
        }
      }
      return limitedSearchResults
    }).then((limitedSearchResults) => {
      let searchResultArtists = [];
      limitedSearchResults.map((artistData) => {
      let img_url = `http://iscale.iheart.com/catalog/artist/${artistData.artistId}?ops=fit(250,0)`;
      let addSearch = {};
      addSearch.artistName = artistData.artistName;
      addSearch.img_url = img_url;
      searchResultArtists.push(addSearch);
      return this.setState({
        artists: searchResultArtists
      })
    })
  })
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
