import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Icon, List } from 'semantic-ui-react';

const ProjectDetail = ({ items }) => {
  const panels = items.map(item => ({
    title: item.name,
    content: (
      <List bulleted>
        {
          item.desc.map((str, idx) => <List.Item key={idx}>{str}</List.Item>)
        }
      </List>
    ),
  }));
  
  return (
    <Accordion styled panels={panels} />
  );
};

ProjectDetail.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProjectDetail;
