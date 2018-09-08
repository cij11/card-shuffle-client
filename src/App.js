import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Card Shuffle</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          {this.props.seed}
        </p>
      </div>
    );
  }
}

App.propTypes = {
  seed: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  seed: state.seed,
});

export default connect(mapStateToProps,)(App);
