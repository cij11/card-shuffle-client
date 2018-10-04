import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectPlayer } from '../actions/actions';

import SelectPlayerComponent from '../components/select-player-component';

class SelectPlayerContainer extends Component {
    render() {
        return(
            <SelectPlayerComponent selectPlayer={this.props.selectPlayer}
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

const mapDispatchToProps = (dispatch, props) => (
    {
        selectPlayer: () => {dispatch(selectPlayer(props.seed, 6, props.playerNumber))}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(SelectPlayerContainer);