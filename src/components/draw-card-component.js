import React, { Component } from 'react';

class DrawCardComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.drawCard} className="turquoise-flat-button">
                    {this.props.text}
                </button>
            </div>
        );
    }
}

export default DrawCardComponent;