import React, { Component } from 'react';

class DrawCardComponent extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.drawCard} class="turquoise-flat-button">
                    Draw a Card
                </button>
            </div>
        );
    }
}

export default DrawCardComponent;