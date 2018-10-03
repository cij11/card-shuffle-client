import React, { Component } from 'react';

class EnterSeedComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {seed: "test"};
    }

    render() {
        return (
            <input type="text"
                name="seed"
                value={this.state.seed} 
                onChange={this.handleChange.bind(this)}
            />
        );
    }

    handleChange(event) {

        this.setState({seed: event.target.value})
      
      }
}

export default EnterSeedComponent;