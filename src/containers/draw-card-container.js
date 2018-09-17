import React, { Component } from 'react';
import { connect } from 'react-redux';

import { drawCard } from '../actions/actions';

class DrawCardContainer extends Component {
    render() {
        return(
            <div>
                <button onClick={this.props.drawCard}>
                    Draw a Card
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        drawCard: () => {dispatch(drawCard())}
    }
);

export default connect(null, mapDispatchToProps)(DrawCardContainer);