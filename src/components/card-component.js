import React, { Component } from 'react';

class CardComponent extends Component {

    render() {
        return (
            <div className="cardComponent">
                <div className="cardSection">
                    Suit: {this.props.data.suit}
                </div>
                <div className="cardSection">
                    Value: {this.props.data.value}
                </div>
            </div>
        );
    }
}

export default CardComponent;