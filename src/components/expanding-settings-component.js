import React, { Component } from 'react';

import SelectPlayerContainer from '../containers/select-player-container';
import EnterSeedContainer from '../containers/enter-seed-container';

class ExpandingSettingsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { isExpanded: false };
    }

    render() {
        let height = this.state.isExpanded ? 100 : 0;

        const divStyle = {
            'max-height': height + 'px',
            'opacity' : this.state.isExpanded? '1' : '0',
            'transition': 'max-height 0.2s ease-out, opacity 0.2s ease-out',
          };
     //   if (this.state.isExpanded) {
            return(
                <div>
                    <button onClick={this.handleChange.bind(this)}>Player Settings</button>
                    <div style={divStyle}>
                        <EnterSeedContainer />
                
                        <div>
                           <SelectPlayerContainer playerNumber={0}/>
                           <SelectPlayerContainer playerNumber={1}/>
                           <SelectPlayerContainer playerNumber={2}/>
                          <SelectPlayerContainer playerNumber={3}/>
                          <SelectPlayerContainer playerNumber={4}/>
                          <SelectPlayerContainer playerNumber={5}/>
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