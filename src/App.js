import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux';

import CardContainer from './containers/card-container';
import DrawCardContainer from './containers/draw-card-container';
import DrawCharacterContainer from './containers/draw-character-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Card Shuffle</h1>
        </header>
        <div>
          <CardContainer deckName={"deck-number-0"}/>
        </div>
        <div>
          <DrawCardContainer drawDecks={["deck-number-0"]}/>
        </div>
        <div>
          <CardContainer deckName={"deck-number-1"}/>
        </div>
        <div>
          <DrawCardContainer drawDecks={["deck-number-1"]}/>
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
