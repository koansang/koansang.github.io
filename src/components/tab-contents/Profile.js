import React from 'react';
import { Container, List, Divider, Label } from 'semantic-ui-react';

import { Constant } from '../../common';
import './Profile.css';

const createSkills = () => {
  const skills = Constant.skills;
  const colors = Constant.colors;

  let index = 0;

  return skills.map(skill => {
    if (index === colors.length) {
      index = 0;
    }

    const color = colors[index];

    index += 1;

    return (
      <Label color={color} key={skill}>
        {skill}
      </Label>
    );
  });
};

const createListItem = () => {
  const profiles = [
    {
      icon: 'id badge',
      header: 'Name',
      description: '오관균 (Oh, KoanGyun)',
    },
    {
      icon: 'birthday',
      header: 'Birthday',
      description: '1982.05.21',
    },
    {
      icon: 'mail outline',
      header: 'Email',
      description: <a href="mailto:koansang@gmail.com">koansang@gmail.com</a>,
    },
    {
      icon: 'github alternate',
      header: 'Github',
      description: <a href="https://github.com/koansang">github.com/koansang</a>,
    },
    {
      icon: 'rocket',
      header: 'Position',
      description: 'Javascript & Front-end Engineer',
    },
    {
      icon: 'code',
      header: 'Skills',
      description: createSkills(),
    },
  ];

  const { Item, Icon, Content, Header, Description } = List;

  return (
    <List>
      {
        profiles.map((profile, index) => (
          <Item key={profile.header} className="profile-items">
            <Icon name={profile.icon} size="big" />
            <Content>
              <Header>{profile.header}</Header>
              <Description>
                {profile.description}
              </Description>
            </Content>
          </Item>
        ))
      }
    </List>
  );
};

const Profile = () => {  

  return (
    <Container text>
      {createListItem()}
      
    </Container>
  );
};

export default Profile;