import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { MainHeader, MenuTab } from '../components';
import './styles/Main.css';

class Main extends Component {
  render() {
    return (
      <div>
        <Grid centered padded>
          <MainHeader />
        </Grid>
        <div className="l-body">
          <MenuTab />
        </div>
      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;
