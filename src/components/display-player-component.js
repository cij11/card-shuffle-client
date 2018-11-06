import React, { Component } from 'react';

class DisplayPlayerComponent extends Component {
    render() {
        return (
            <span>
                    Player Number: {this.props.text}
            </span>
        );
    }
}

export default DisplayPlayerComponent;