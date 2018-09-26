import React, { Component } from 'react';
import { connect } from 'react-redux';

import { drawCard } from '../actions/actions';

import DrawCardComponent from '../components/draw-card-component';

class DrawCharacterContainer extends Component {
    render() {
        return(
            <DrawCardComponent drawCard={this.props.drawCard} />
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        drawCard: () => {dispatch(drawCard(['deck-number-1']))}
    }
);

export default connect(null, mapDispatchToProps)(DrawCharacterContainer);