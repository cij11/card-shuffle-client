import React, { Component } from 'react';

class EnterSeedComponent extends Component {

    render() {
        return (
            <div>
                <div>
                    Enter Game Password - All players must choose the same password:
                </div>
                <div>
                    <input type="text"
                        name="seed"
                        value={this.props.seed} 
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
            </div>
        );
    }

    handleChange(event) {

    //    this.setState({seed: event.target.value})
        this.props.storeSeed(event.target.value);

      
      }
}

export default EnterSeedComponent;