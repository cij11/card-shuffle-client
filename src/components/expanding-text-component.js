import React, { Component } from 'react';
import { RulesComponent } from './rules-component';

class ExpandingTextComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        const divStyle = {
            'opacity' : this.state.isExpanded? '1' : '0',
            'transition': 'opacity 0.2s ease-out',
            'text-align': 'left'
          };

        return(
            <div>
                <button onClick={this.handleChange.bind(this)}>
                    Rules
                </button>
                <div style={divStyle}>
                
                    {this.state.isExpanded && 
                    <div>
                        <RulesComponent />
                        <button onClick={this.handleChange.bind(this)}>
                                Collapse Rules
                        </button>
                    </div>
                    }
                </div>
            </div>
        );
    }
    
    handleChange() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default ExpandingTextComponent;