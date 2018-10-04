import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPlayer } from '../actions/actions';

import SelectPlayerComponent from '../components/select-player-component';

class SelectPlayerContainer extends Component {
    render() {
        return(
            <SelectPlayerComponent selectPlayer={this.props.selectPlayer}
                seed={this.props.seed}
                playerNumber={this.props.playerNumber}
                text={this.props.playerNumber + 1}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        seed: state.seed,
    }
}

const mapDispatchToProps = (dispatch) => (
    {
        selectPlayer: (seed, numPlayers, playerNumber) => {dispatch(selectPlayer(seed, numPlayers, playerNumber))}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerContainer);