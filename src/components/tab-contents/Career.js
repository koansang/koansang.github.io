import React from 'react';
import { Container, Grid, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';

import Statistic from '../statistic';

const calCareer = () => {
  const startTime = moment().year(2011).month(7);
  const diff = moment().diff(startTime, 'months');

  return {
    years: parseInt(diff / 12, 10),
    months: diff % 12,
  };
};

const Career = () => {
  const careerPeriod = calCareer();

  return (
    <Container text>
      <Grid textAlign="center">
        <Grid.Column mobile="16" largeScreen="8" textAlign="center">
          <Segment>
            <Label as="a" color="red" attached="top left">Total Career</Label>
            <Statistic value={careerPeriod.years} label="Years" color="orange" />
            <Statistic value={careerPeriod.months} label="Months" color="violet" />
          </Segment>
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Career;
