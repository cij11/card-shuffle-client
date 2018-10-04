import React, { Component } from 'react';

class EnterSeedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {seed: "test"};
    }

    render() {
        return (
            <div>
                <input type="text"
                    name="seed"
                    value={this.state.seed} 
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }

    handleChange(event) {

        this.setState({seed: event.target.value})
      
      }
}

export default EnterSeedComponent;