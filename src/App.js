import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import CardContainer from './containers/card-container';
import DrawCardContainer from './containers/draw-card-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Card Shuffle</h1>
        </header>
        <div>
          <CardContainer />
        </div>
        <div>
          <DrawCardContainer />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  seed: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  seed: state.seed,
});

export default connect(mapStateToProps,)(App);
