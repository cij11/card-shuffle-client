import React, { Component } from 'react';

class SelectPlayerComponent extends Component {
    render() {
        if (this.props.selectNumber == this.props.playerNumber) {
            return (
                <span>
                    <button className="selectedButton" onClick={this.handleChange.bind(this)}>
                        {this.props.text}
                    </button>
                </span>
            );
        } else {
            return (
                <span>
                    <button className="unselectedButton" onClick={this.handleChange.bind(this)}>
                        {this.props.text}
                    </button>
                </span>
            );
        }
    }

    handleChange() {
        this.props.selectPlayer(this.props.seed, 6, this.props.selectNumber)
    }
}

export default SelectPlayerComponent;