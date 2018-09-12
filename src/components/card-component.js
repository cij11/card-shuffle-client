import React, { Component } from 'react';

class CardComponent extends Component {

    render() {
        return (
            <div>
                <div>
                    Suit: {this.props.data.suit}
                </div>
                <div>
                    Value: {this.props.data.value}
                </div>
            </div>
        );
    }
}

export default CardComponent;