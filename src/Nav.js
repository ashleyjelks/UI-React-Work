import React from 'react';
import { Navbar, FormGroup, Button, FormControl } from 'react-bootstrap';
const NavBar = ({ handleSearch }) => {

  const searchArtist = () => {
    let searchInput = document.getElementById('searchInput');
    handleSearch(searchInput.value)
  };

  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="#">
            <img src="https://upload.wikimedia.org/wikipedia/en/3/3a/IHeartRadio_logo.png" className="App-logo" alt="IHeartRadio logo" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl id="searchInput" type="text" placeholder="Search" />
        </FormGroup>
        {' '}
        <Button id="submitSearch" type="submit" onClick={searchArtist}>Submit</Button>
      </Navbar.Form>
    </Navbar>
  );
};

export default NavBar;
