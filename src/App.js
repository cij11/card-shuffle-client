import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

import { connect } from 'react-redux';

import CardContainer from './containers/card-container';
import DrawCardContainer from './containers/draw-card-container';
import ExpandingTextComponent from './components/expanding-text-component';
import ExpandingSettingsComponent from './components/expanding-settings-component';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Card Shuffle</h1>
            <div className="wrapper">
              <div className="drawGroup">
                <ExpandingTextComponent />
              </div>
              <div className="drawGroup">
                <ExpandingSettingsComponent />
              </div>
            </div>
        </header>

        <div className="wrapper">
          <div className="drawGroup cardStyling">
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

          <div className="drawGroup cardStyling">
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
