import React, { Component } from 'react';

class CardComponent extends Component {

    render() {
        let paragraphs;
        let rules;
        let items;
        let text = this.props.data.text;

        if (this.props.data.paragraphs) {
            paragraphs = this.props.data.paragraphs.map(
                (paragraph) => <p>{paragraph}</p>
            )
        } else {
            paragraphs = [];
        }

        if (this.props.data.rules) {
            rules = this.props.data.rules.map(
                (rule) => <li>{rule}</li>
            )
        } else {
            rules = [];
        }

        if (this.props.data.items) {
            items = this.props.data.items.map(
                (item) => <li>{item}</li>
            )
        } else {
            items = [];
        }

        return (
            <div className="cardComponent">
                <h3 className="cardSection">
                    Title - {this.props.data.title}
                </h3>
                <div className="cardSection">
                    { text && 
                        (
                            <p>{text}</p>
                        )
                    }

                    { rules.length > 0 && 
                        (
                            <div>
                                Rules
                                <ul>
                                    {rules}
                                </ul>
                            </div>
                        )
                    }

                    { items.length > 0 && 
                        (
                            <div>
                                Items
                                <ul>
                                    {items}
                                </ul>
                            </div>
                        )
                    }

                </div>
            </div>
        );
    }
}

export default CardComponent;