import React from 'react';
import { Tab } from 'semantic-ui-react';
import _ from 'lodash';

import { Constant } from '../../common';
import { ProjectDetail } from '../tab-contents/career';

const tabs = [
  {
    menuItem: '인코어드 테크놀로지스',
    itemKey: 'encored',
  },
  {
    menuItem: '루테스',
    itemKey: 'lutes',
  },
  {
    menuItem: '기타',
    itemKey: 'etc',
  },
];

const ProjectTab = () => {
  const projects = Constant.projects;
  const renderTabs = tabs.map((tab) => {
    const projectBytab = _.find(projects, { id: tab.itemKey });
    tab.render = () => (
      <Tab.Pane>
        <ProjectDetail items={projectBytab.items} />
      </Tab.Pane>
    );
    return tab;
  });

  return (
    <Tab menu={{ pointing: true }} panes={renderTabs} />
  );
};

export default ProjectTab;
