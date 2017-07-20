import React from 'react';
import PropTypes from 'prop-types';
import { Header, Divider } from 'semantic-ui-react';

const Title = ({ title, top }) => {
  return (
    <div style={{ 'margin-top': `${top}px` }}>
      <Header>{title}</Header>
      <Divider />
    </div>
  );
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
  top: PropTypes.number,
};

export default Title;
