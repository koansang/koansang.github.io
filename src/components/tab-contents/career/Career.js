import React from 'react';
import { Container, Grid, Segment, Label } from 'semantic-ui-react';
import moment from 'moment';

import { Title } from '../../title';
import { ProjectTab } from '../../tab';
import Summary from './Summary';


const Career = () => {
  return (
    <Container text>
      <Title title="Summary" />
      <Summary />
      <Title title="Projects" top={50} />
      <ProjectTab />
    </Container>
  );
};

export default Career;
