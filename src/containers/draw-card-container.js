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

const mapStateToProps = (state) => (
    {
        blah: 'blah'
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        drawCard: () => {dispatch(drawCard())}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(DrawCardContainer);