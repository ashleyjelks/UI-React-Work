import React, { Component } from 'react';
// import request from 'request';
import './App.css';
import Artists from './Artists';
import NavBar from './Nav';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artists: [],
      searchArtists: ''
    };
    // this.handleSearch = this.handleSearch.bind(this);
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
  handleSearch(searchInput) {
    console.log(searchInput);
    fetch(`http://api-3283.iheart.com/api/v1/catalog/searchAll?keywords=${searchInput}&queryTrack=false&queryBundle=false&queryArtist=true&queryStation=false&queryFeaturedStation=false&queryTalkShow=false&queryTalkTheme=false&queryKeyword=false&countryCode=US`,
    (err, res, body)=> {
      if (!err && res.statusCode === 200) {
        console.log(body)
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NavBar handleSearch={this.handleSearch} />
        </header>
          {/*<AutoComplete
            hintText={<span><i className="material-icons">search</i> Search artists...</span>}
            dataSource={this.state.artists}
            onUpdateInput={this.handleUpdateInput}
          />*/}
        <main className="Section-main">
          <Artists artists={this.state.artists} />
        </main>
      </div>
    );
  }
}

export default App;
