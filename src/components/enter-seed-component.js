import React, { Component } from 'react';

class EnterSeedComponent extends Component {

    render() {
        return (
            <div>
                Enter Game Password - All players must choose the same password:
                <input type="text"
                    name="seed"
                    value={this.props.seed} 
                    onChange={this.handleChange.bind(this)}
                />
            </div>
        );
    }

    handleChange(event) {

    //    this.setState({seed: event.target.value})
        this.props.storeSeed(event.target.value);

      
      }
}

export default EnterSeedComponent;