import React from 'react';
import { Grid, Col, Row, Image} from 'react-bootstrap';

const Artists = ({ artists }) => {
  return (
    <Grid className="Grid-container">
      <Row>
      {artists.map((artist, index) => (
        <Col
            md={4}
            sm={6}
            key={index}
            className="Grid--item__col"
          >
          <Image
            className="Image--artist"
            responsive
            rounded
            src={artist.img_url}
            alt={'Image of music artist: ' + artist.artistName}
          />
          <span className="Artist--name">{artist.artistName}</span>
          <br />
          {artist.description !== undefined ? <span className="Artist--description">{artist.description}</span> : null}
        </Col>
      ))}
      </Row>
    </Grid>
  );
};

export default Artists;
