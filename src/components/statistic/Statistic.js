import React from 'react';
import PropTypes from 'prop-types';

import { Statistic } from 'semantic-ui-react';


const componentName = ({ color, value, label }) => {
  return (
    <Statistic color={color}>
      <Statistic.Value>{value}</Statistic.Value>
      <Statistic.Label>{label}</Statistic.Label>
    </Statistic>
  );
};

componentName.propTypes = {
  color: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export default componentName;
