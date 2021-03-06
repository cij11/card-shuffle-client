import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPlayer } from '../actions/actions';

import SelectPlayerComponent from '../components/select-player-component';

class SelectPlayerContainer extends Component {
    render() {
        return(
            <SelectPlayerComponent selectPlayer={this.props.selectPlayer}
                seed={this.props.seed}
                selectNumber={this.props.selectNumber}
                playerNumber={this.props.playerNumber}
                text={this.props.selectNumber + 1}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seed: state.seed,
        playerNumber: state.playerNumber,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        selectPlayer: (seed, numPlayers, playerNumber) => {dispatch(selectPlayer(seed, numPlayers, playerNumber))}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerContainer);