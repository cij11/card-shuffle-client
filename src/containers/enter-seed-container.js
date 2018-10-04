import React, { Component } from 'react';
import { connect } from 'react-redux';

import { storeSeed } from '../actions/actions';

import EnterSeedComponent from '../components/enter-seed-component';

class EnterSeedContainer extends Component {
    render() {
        return (
            <EnterSeedComponent seed={this.props.seed} storeSeed={this.props.storeSeed}/>
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
        storeSeed: (seed) => {dispatch(storeSeed(seed))}
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(EnterSeedContainer);