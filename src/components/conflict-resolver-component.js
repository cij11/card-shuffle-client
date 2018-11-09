import React, { Component } from 'react'

class ConflictResolverComponent extends Component {
    
    constructor() {
        super();
        this.state = {
            itemChecked: {},
        };
    }
    
    checkItem(e, category) {
        let itemChecked = this.state.itemChecked;
        itemChecked[category] = e.target.checked;
        this.setState({itemChecked: itemChecked});

        console.log(this.state);
        console.log(e);
    }

    resolveConflict() {
        let checks = 0;
        Object.keys(this.state.itemChecked).forEach(checkbox => {
            if (checkbox) checks++;
        });

        // Score is equal to a random percentage, plus 10% per point.
        // 50% required for success

        let randomPercent = Math.floor((Math.random() * 100));
        let modifiedPercent = randomPercent + 15 * checks;
        let finalPercent = Math.min(100, modifiedPercent);

        let scorePhrase = finalPercent + ": " + this.scoreDescription(finalPercent);
        this.setState({
            itemChecked: {},
            score: scorePhrase,});
        console.log(this.state);
    }

    scoreDescription(percentage) {
        let messages = [
            [20, 'Dismal Failure'],
            [40, 'Convincing Failure'],
            [40, 'Convincing Failure'],
            [50, 'Narrow Failure. Try again'],
            [60, 'Bare Success. Try harder'],
            [80, 'Convincing Success'],
            [98, 'Overwhelming success'],
        ];

        for(let pair of messages) {
            if (percentage <= pair[0]) {
                return pair[1];
            }
        }

        return "Staggering Success. "
    }

    render() {
        return <div className="conflictResolver">
            <h4 className="conflictResolverHeading">Conflict Resolution</h4>
            <div>
                <input type="checkbox" className="conflictResolverCheckbox" checked={this.state.itemChecked.plausible} onChange={ (e) => this.checkItem(e, 'plausible') }></input>
                Plausible
            </div>
            <div>
                <input type="checkbox" className="conflictResolverCheckbox" checked={this.state.itemChecked.comical} onChange={ (e) => this.checkItem(e, 'comical') }></input>
                Comical
            </div>
            <div>
                <input type="checkbox" className="conflictResolverCheckbox" checked={this.state.itemChecked.fitting} onChange={ (e) => this.checkItem(e, 'fitting') }></input>
                In Character
            </div>
            
            <div>
                <button label = "Resolve Conflict" className="turquoise-flat-button" onClick = {(e) => { this.resolveConflict()} }>
                    Resolve Conflict
                </button>
            </div>
            

            <div className="conflictResolverScore">
                <b>Score: </b>{this.state.score}
            </div>
        </div>
    }
}

export default ConflictResolverComponent;