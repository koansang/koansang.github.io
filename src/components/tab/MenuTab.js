import React from 'react';
import { Tab } from 'semantic-ui-react';

import { Profile, Career } from '../tab-contents';

const tabs = [
  {
    menuItem: 'Profile',
    render: () => (
      <Tab.Pane>
        <Profile />
      </Tab.Pane>
    ),
  },
  {
    menuItem: 'Career',
    render: () => (
      <Tab.Pane>
        <Career />
      </Tab.Pane>
    ),
  },
];

const MenuTab = () => {
  return (
    <Tab menu={{ secondary: true, pointing: true }} panes={tabs} />
  );
};

export default MenuTab;
