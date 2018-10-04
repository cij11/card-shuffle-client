import React, { Component } from 'react';

class ExpandingTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        if (this.state.isExpanded) {
            return(
                <div>
                     <button onClick={this.handleChange.bind(this)}>
                        Rules
                    </button>
                    <div>
                        The rules.
                        Here are some rules.
                        You would be well advised to read them.
                    </div>
                    <button onClick={this.handleChange.bind(this)}>
                        Collapse
                    </button>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.handleChange.bind(this)}>Rules</button>
                </div>
            );
        }
    }

    handleChange() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default ExpandingTextComponent;