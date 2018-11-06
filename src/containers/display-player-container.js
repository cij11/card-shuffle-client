import React, { Component } from 'react';
import { connect } from 'react-redux';

import DisplayPlayerComponent from '../components/display-player-component';

class DisplayPlayerContainer extends Component {
    render() {
        return(
            <DisplayPlayerComponent selectPlayer={this.props.selectPlayer}
                text={this.props.playerNumber + 1}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        playerNumber: state.playerNumber,
    }
}

export default connect(mapStateToProps)(DisplayPlayerContainer);