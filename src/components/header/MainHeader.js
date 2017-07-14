import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

import profile from '../../images/profile.jpg';
import './MainHeader.css';

const MainHeader = () =>
  (
    <Grid.Column className="main-header" textAlign="center" verticalAlign="middle">
      <Image className="profile-image" src={profile} height="150" width="150" shape="circular" />
      <Header className="welcome-message" size="huge">
        This page was created using React, Firebase, and Semantic-UI.
      </Header>
    </Grid.Column>
  );


export default MainHeader;
