// Store aware container for surfacing the current card.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardComponent from '../components/card-component';

class CardContainer extends Component {
    render() {
        var cards = this.getDeckByName().cards,
            topCard = cards[cards.length-1];
        return (
            <CardComponent data={topCard.data} />
        );
    }

    getDeckByName() {
        var namedDeck = this.props.decks[0];
        this.props.decks.forEach(element => {
            if (element.deckName === this.props.deckName) {
                namedDeck = element;
            }
        });

        return namedDeck;
    }
}

CardContainer.propTypes = {
    decks: PropTypes.array.isRequired,
    deckName: PropTypes.string.isRequired,
  };

const mapStateToProps = state => ({
    decks: state.decks,
});
  
export default connect(mapStateToProps,)(CardContainer);