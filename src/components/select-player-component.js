import React, { Component } from 'react';

class SelectPlayerComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.selectPlayer}>
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default SelectPlayerComponent;