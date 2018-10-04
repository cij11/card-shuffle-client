import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPlayer } from '../actions/actions';

import SelectPlayerComponent from '../components/select-player-component';

class SelectPlayerContainer extends Component {
    render() {
        return(
            <SelectPlayerComponent selectPlayer={this.props.selectPlayer}
                playerNumber={this.props.playerNumber}
                text={this.props.playerNumber}
            />
        );
    }
}

const mapDispatchToProps = (dispatch, props) => (
    {
        selectPlayer: () => {dispatch(selectPlayer("test", 2, props.playerNumber))}
    }
);

export default connect(null, mapDispatchToProps)(SelectPlayerContainer);