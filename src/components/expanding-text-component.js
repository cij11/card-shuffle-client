import React, { Component } from 'react';

class ExpandingTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        let height = this.state.isExpanded ? 100 : 0;

        const divStyle = {
            'max-height': height + 'px',
            'opacity' : this.state.isExpanded? '1' : '0',
            'transition': 'max-height 0.2s ease-out, opacity 0.2s ease-out',
          };

        return(
            <div>
                    <button onClick={this.handleChange.bind(this)}>
                    Rules
                </button>
                <div style={divStyle}>
                <div>
                    The rules.
                    Here are some rules.
                    You would be well advised to read them.
                </div>
                </div>
            </div>
        );
    }
    
    handleChange() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default ExpandingTextComponent;