import React, { Component } from 'react';

class SelectPlayerComponent extends Component {
    render() {
        return (
            <span>
                <button onClick={this.handleChange.bind(this)}>
                    {this.props.text}
                </button>
            </span>
        );
    }

    handleChange() {
        this.props.selectPlayer(this.props.seed, 6, this.props.playerNumber)
    }
}

export default SelectPlayerComponent;