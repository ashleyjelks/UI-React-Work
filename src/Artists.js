import React from 'react';
import { Grid, Col, Row} from 'react-bootstrap';

const Artists = ({ artists }) => {
  return (
    <Grid className="Grid-container">
      <Row>
      {artists.map((artist, index) => (
        <Col
            md={4}
            sm={6}
            key={index}
            className="Grid-item--col"
          >
            <p>{artist.artistName}</p>
            {artist.description !== undefined ? <p>{artist.description}</p> : <div></div>}
          <img
            className="Image--artist"
            src={artist.img_url}
            alt={'Image of music artist: ' + artists.artistName}
          />
        </Col>
      ))}
      </Row>
    </Grid>
  );
};

export default Artists;
