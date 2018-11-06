import React, { Component } from 'react';

import SelectPlayerContainer from '../containers/select-player-container';
import DisplayPlayerContainer from '../containers/display-player-container';
import EnterSeedContainer from '../containers/enter-seed-container';

class ExpandingSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        const divStyle = {
            'max-height': this.state.isExpanded ? '12em' : '0em',
            'opacity' : this.state.isExpanded? '1' : '0',
            'transition': 'max-height  0.3s ease-out, opacity 0.2s ease-out',
            'text-align': 'left',
            'overflow': 'hidden',
          };
     //   if (this.state.isExpanded) {
            return(
                <div>
                    <button onClick={this.handleChange.bind(this)}>Player Settings</button>
                    <div style={divStyle}>
                        <EnterSeedContainer />
                        <div className="playerSetupCentering">
                            Select player number. Each player must select a different number
                        </div>
                        <div>
                           <SelectPlayerContainer playerNumber={0}/>
                           <SelectPlayerContainer playerNumber={1}/>
                           <SelectPlayerContainer playerNumber={2}/>
                          <SelectPlayerContainer playerNumber={3}/>
                          <SelectPlayerContainer playerNumber={4}/>
                          <SelectPlayerContainer playerNumber={5}/>

                          <DisplayPlayerContainer />

                        </div>
                    </div>
                </div>
            );
    }

    handleChange() {
        this.setState({ isExpanded: !this.state.isExpanded });
    }
}

export default ExpandingSettingsComponent;