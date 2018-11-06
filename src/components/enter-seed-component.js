import React, { Component } from 'react';

class EnterSeedComponent extends Component {

    render() {
        return (
            <div>
                <div className="playerSetupCentering">
                    Enter a seed word. All players must enter the same seed word:
                </div>
                <div className="seedInput">
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
        this.props.storeSeed(event.target.value);
      }
}

export default EnterSeedComponent;