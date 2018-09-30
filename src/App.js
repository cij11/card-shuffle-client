import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';

import CardContainer from './containers/card-container';
import DrawCardContainer from './containers/draw-card-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Card Shuffle</h1>
        </header>

        <div className="wrapper">
          <div className="drawGroup">
            <div>
              <CardContainer deckName={"deck-number-0"}/>
            </div>
            <div>
              <DrawCardContainer drawDecks={["deck-number-0"]} text={"Draw New Room"}/>
            </div>
          </div>

          <div className="drawGroup">
            <div>
              <CardContainer deckName={"characters"}/>
            </div>
            <div>
              <DrawCardContainer drawDecks={["characters"]} text={"Draw New Character"}/>
            </div>
          </div>
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
