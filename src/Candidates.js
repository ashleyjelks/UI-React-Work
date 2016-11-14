import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { white, purple500, indigo900, pink800 } from 'material-ui/styles/colors';


const Candidates = ({ candidates }) => {
  const style = {
    cardHeader: {
      fontSize: 20,
      color: indigo900
    },
    cardTitle: {
      color: pink800,
      fontSize: 15,
      lineHeight: '100%'

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
        className="card"
        style={style.Card}

      >
      <Avatar
        color={white}
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
