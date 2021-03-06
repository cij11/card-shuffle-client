import React, { Component } from 'react';

class CardComponent extends Component {

    render() {
        if (this.props.data.type == "CapCard") {
            return (
                <div className="capCard">
                    <h1>
                        {this.props.data.title}
                    </h1>  
                </div>
            )
        }

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
            <div className="deckCard">
                <h3 className="cardSection">
                    {this.props.data.title}
                </h3>
                <div className="cardSection">
                    { text && 
                        (
                            <p>{text}</p>
                        )
                    }

                    {paragraphs} 


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