import React, { Component } from 'react';

import SelectPlayerContainer from '../containers/select-player-container';
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
                    <button className="expandCollapseButton"
                        onClick={this.handleChange.bind(this)}>
                        Player Settings
                    </button>
                    <div style={divStyle}>
                        <EnterSeedContainer />
                        <div className="playerSetupCentering">
                            Player number:&nbsp;

                            <SelectPlayerContainer selectNumber={0}/>
                            <SelectPlayerContainer selectNumber={1}/>
                            <SelectPlayerContainer selectNumber={2}/>
                            <SelectPlayerContainer selectNumber={3}/>
                            <SelectPlayerContainer selectNumber={4}/>
                            <SelectPlayerContainer selectNumber={5}/>
                        </div>
                        <div>
                            (Each player must select a different number.)
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