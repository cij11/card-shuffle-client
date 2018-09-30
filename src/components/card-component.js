import React, { Component } from 'react';

class CardComponent extends Component {

    render() {
        return (
            <div className="cardComponent">
                <div className="cardSection">
                    Title - {this.props.data.title}
                </div>
                <div className="cardSection">
                    Text - {this.props.data.text}
                </div>
            </div>
        );
    }
}

export default CardComponent;