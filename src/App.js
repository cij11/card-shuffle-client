import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';

import CardContainer from './containers/card-container';
import DrawCardContainer from './containers/draw-card-container';
import SelectPlayerContainer from './containers/select-player-container';
import EnterSeedContainer from './containers/enter-seed-container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Card Shuffle</h1>
          <SelectPlayerContainer playerNumber={0}/>
          <SelectPlayerContainer playerNumber={1}/>
          <EnterSeedContainer />
        </header>

        <div className="wrapper">
          <div className="drawGroup">
            <div>
              <DrawCardContainer drawDecks={["rooms", "items"]} text={"Draw New Room"}/>
            </div>
            <div>
              <CardContainer deckName={"rooms"}/>
            </div>
            <div>
              <CardContainer deckName={"items"}/>
            </div>
          </div>

          <div className="drawGroup">
            <div>
              <DrawCardContainer drawDecks={["characters"]} text={"Draw New Character"}/>
            </div>
            <div>
              <CardContainer deckName={"characters"}/>
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
