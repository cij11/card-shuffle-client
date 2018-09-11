// Store aware container for surfacing the current card.

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CardContainer extends Component {
    render() {
        return (
            <span>{this.props.card.data.value}</span>
        );
    }
}

CardContainer.propTypes = {
    card: PropTypes.object.isRequired,
  };

const mapStateToProps = state => ({
    card: state.card,
});
  
export default connect(mapStateToProps,)(CardContainer);