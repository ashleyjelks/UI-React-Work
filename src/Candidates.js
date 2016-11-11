import React from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';

import {
  blue300,
  indigo900,
  orange200,
  deepOrange300,
  pink400,
  purple500,
} from 'material-ui/styles/colors';


const Candidates = ({ candidates }) => (
  <GridList
    cols={4}
  >
    {candidates.map((candidate, index) => (
    <Card key={index}>
    <Avatar
          color={deepOrange300}
          backgroundColor={purple500}
          size={30}
        >
          {candidate.grade}
        </Avatar>
    <CardHeader
      title={candidate.first_name + ' ' + candidate.last_name}
    />
    <CardTitle
      title={candidate.last_position}
      subtitle={candidate.last_company}
    />
    </Card>
  ))}
  </GridList>
);


export default Candidates;


/**


candidates.map((candidate, index) => (
    <Card
      key={index}
    >
      <CardHeader
        title={candidate.first_name + ' ' + candidate.last_name}
      />
      <CardTitle
        title={candidate.last_position}
      />
      <CardText>
        {candidate.last_company}
      </CardText>
    </Card>
    ))

 **/
