import React, { Component } from 'react';

class SelectPlayerComponent extends Component {
    render() {
        return (
            <span>
                <button onClick={this.props.selectPlayer}>
                    {this.props.text}
                </button>
            </span>
        );
    }
}

export default SelectPlayerComponent;