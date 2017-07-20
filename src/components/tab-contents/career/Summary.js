import React from 'react';
import { Grid, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';

import Statistic from '../../statistic';
import { GradeChart } from '../../chart';

const calCareer = () => {
  const startTime = moment().year(2011).month(7);
  const diff = moment().diff(startTime, 'months');

  return {
    years: parseInt(diff / 12, 10),
    months: diff % 12,
  };
};

const Summary = () => {
  const careerPeriod = calCareer();

  return (
    <Grid textAlign="center">
      <Grid.Row>
        <Grid.Column mobile="16" computer="8" textAlign="center">
          <Segment>
            <Label as="a" color="red" attached="top left">Total Career</Label>
            <Statistic value={careerPeriod.years} label="Years" color="orange" />
            <Statistic value={careerPeriod.months} label="Months" color="violet" />
          </Segment>
        </Grid.Column>
        <Grid.Column mobile="16" computer="8" textAlign="center">
          <Segment>
            <Label as="a" color="red" attached="top left">Skill</Label>
            <GradeChart />
          </Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Summary;
