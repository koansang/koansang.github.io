import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    return (
      <div>
        <h3>Welcome to My Home~!!!</h3>
      </div>
    );
  }
}

Main.propTypes = {

};

export default Main;
