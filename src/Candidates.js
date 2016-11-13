import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { deepOrange300, purple500, indigo900, pink800 } from 'material-ui/styles/colors';


const Candidates = ({ candidates }) => {
  const style = {
    cardHeader: {
      fontSize: 25,
      marginTop: -56,
      color: indigo900
    },
    cardTitle: {
      color: pink800,
      fontSize: 15,

    },
    cardSubtitle: {

    }
  };

  return (
    <GridList
      cols={4}
      className="Grid-container"
    >
      {candidates.map((candidate, index) => (
      <Card
        key={index}
        className="Card"
      >
      <Avatar
        color={deepOrange300}
        backgroundColor={purple500}
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
