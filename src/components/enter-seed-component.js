import React, { Component } from 'react';

class EnterSeedComponent extends Component {

    render() {
        return (
            <p>
                <div className="playerSetupCentering">
                    Enter a seed word:&nbsp;
                    <input type="text"
                        name="seed"
                        
                        value={this.props.seed} 
                        onChange={this.handleChange.bind(this)}
                    />
                </div>
                <div>
                    (All players must enter the same seed word.)
                    <break />
                </div>
            </p>
        );
    }

    handleChange(event) {
        this.props.storeSeed(event.target.value);
      }
}

export default EnterSeedComponent;