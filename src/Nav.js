import React from 'react';
import { Navbar, FormGroup, Button, FormControl, Image } from 'react-bootstrap';

const NavBar = ({ handleSearch }) => {

  const searchArtist = () => {
    let searchInput = document.getElementById('searchInput');
    handleSearch(searchInput.value)
  };

  return (
    <Navbar inverse>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <Image
              responsive
              src="http://www.iheart.com/assets/logo-white.508aaeed25e40622317ee06bf5acccf8.png?rev=7.19.2"
              className="App-logo"
              alt="IHeartRadio logo"
            />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
      <Navbar.Form pullRight>
        <FormGroup>
          <FormControl id="searchInput" type="text" placeholder="Search Artists" />
        </FormGroup>
        {' '}
        <Button type="submit" onClick={searchArtist}>Submit</Button>
      </Navbar.Form>
    </Navbar>
  );
};

export default NavBar;
