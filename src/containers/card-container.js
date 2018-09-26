// Store aware container for surfacing the current card.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CardComponent from '../components/card-component';

class CardContainer extends Component {
    render() {
        return (
            <CardComponent data={this.props.card.data} />
        );
    }
}

CardContainer.propTypes = {
    card: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    card: state.decks[0].card,
});
  
export default connect(mapStateToProps,)(CardContainer);