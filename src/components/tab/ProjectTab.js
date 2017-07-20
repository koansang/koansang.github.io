import React from 'react';
import { Tab } from 'semantic-ui-react';

import { Profile, Career } from '../tab-contents';

const tabs = [
  {
    menuItem: '인코어드 테크놀로지스',
    render: () => (
      <Tab.Pane>
        <Profile />
      </Tab.Pane>
    ),
  },
  {
    menuItem: '루테스',
    render: () => (
      <Tab.Pane>
        <Career />
      </Tab.Pane>
    ),
  },
];

const MenuTab = () => {
  return (
    <Tab menu={{ pointing: true }} panes={tabs} />
  );
};

export default MenuTab;
