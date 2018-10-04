import React, { Component } from 'react';

import SelectPlayerContainer from '../containers/select-player-container';
import EnterSeedContainer from '../containers/enter-seed-container';

class ExpandingSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        if (this.state.isExpanded) {
            return(
                <div>
                    <button onClick={this.handleChange.bind(this)}>Player Settings</button>

                    <EnterSeedContainer />
                
                    <div>
                        <SelectPlayerContainer playerNumber={0}/>
                        <SelectPlayerContainer playerNumber={1}/>
                        <SelectPlayerContainer playerNumber={2}/>
                        <SelectPlayerContainer playerNumber={3}/>
                        <SelectPlayerContainer playerNumber={4}/>
                        <SelectPlayerContainer playerNumber={5}/>
                    </div>

                    <button onClick={this.handleChange.bind(this)}>Collapse</button>
                </div>
            );
        } else {
            return(
                <div>
                    <button onClick={this.handleChange.bind(this)}>Player Settings</button>
                </div>
            );
        }
    }

    handleChange() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default ExpandingSettingsComponent;