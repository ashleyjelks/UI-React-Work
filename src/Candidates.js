import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { white, purple500, indigo900, pink800, red500, grey600, pink900 } from 'material-ui/styles/colors';


const Candidates = ({ candidates }) => {
  const style = {
    cardHeader: {
      fontSize: 20,
      color: indigo900
    },
    cardTitle: {
      color: pink800,
      fontSize: 16,
      lineHeight: 1.25
    },
    cardSubtitle: {
      color: grey600
    }
  };

  const gradeBackground = {
    1: indigo900,
    2: red500,
    3: pink900
  };

  return (
    <GridList
      cols={4}
      className="Grid-container"
    >
      {candidates.map((candidate, index) => (
      <Card
        key={index}
        className="card"
      >
      <Avatar
        color={white}
        backgroundColor={gradeBackground[candidate.grade]}
        size={30}
        className="Avatar"
      >
        {candidate.grade}
      </Avatar>
      <CardHeader
        title={candidate.first_name + ' ' + candidate.last_name}
        className="Card-header"
        titleStyle={style.cardHeader}
      />
      <CardTitle
        title={candidate.last_position}
        subtitle={candidate.last_company}
        className="Card-title"
        titleStyle={style.cardTitle}
        subtitleStyle={style.cardSubtitle}
      />
      </Card>
    ))}
    </GridList>
  );
};

export default Candidates;
