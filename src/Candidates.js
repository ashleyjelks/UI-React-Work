import React from 'react';
import { GridList } from 'material-ui/GridList';
import { Card, CardHeader, CardTitle } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import { white, indigo900, pink800, red500, grey600, pink900 } from 'material-ui/styles/colors';


const Candidates = ({ candidates }) => {
  const style = {
    candidateName: {
      color: indigo900,
      fontSize: 20
    },
    candidatePosition: {
      color: pink800,
      fontSize: 16,
      lineHeight: 1.25
    },
    candidateCompany: {
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
        className="Card"
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
        titleStyle={style.candidateName}
      />
      <CardTitle
        title={candidate.last_position}
        subtitle={candidate.last_company}
        className="Card-title"
        titleStyle={style.candidatePosition}
        subtitleStyle={style.candidateCompany}
      />
      </Card>
    ))}
    </GridList>
  );
};

export default Candidates;
