import React, { Component } from 'react';
import { connect } from 'react-redux';

import { drawCard } from '../actions/actions';

import DrawCardComponent from '../components/draw-card-component';

class DrawCardContainer extends Component {
    render() {
        return(
            <DrawCardComponent drawCard={this.props.drawCard} />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => (
    {
        drawCard: () => {dispatch(drawCard(props.drawDecks))}
    }
);

export default connect(null, mapDispatchToProps)(DrawCardContainer);