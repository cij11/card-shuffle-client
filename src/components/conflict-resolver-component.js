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
        if (percentage < 20) {
            return "Dismal Failure";
        }

        if (percentage < 40) {
            return "Convincing Failure"
        }

        if (percentage < 50) {
            return "Narrow Failure. Try again"
        }

        if (percentage <60) {
            return "Bare Success"
        }

        if (percentage < 80) {
            return "Convincing Success"
        }

        if (percentage < 98) {
            return "Overwhelming success"
        }

        return "Staggering Success. "
    }

    render() {
        return <div>
            <div>
                <input type = "checkbox" checked = {this.state.itemChecked.plausible} onChange = { (e) => this.checkItem(e, 'plausible') }></input>
                Plausible
            </div>
            <div>
                <input type = "checkbox" checked = {this.state.itemChecked.comical} onChange = { (e) => this.checkItem(e, 'comical') }></input>
                Comical
            </div>
            <div>
                <input type = "checkbox" checked = {this.state.itemChecked.fitting} onChange = { (e) => this.checkItem(e, 'fitting') }></input>
                Fitting
            </div>
            
            <div>
                <input type = "button" label = "Resolve Conflict" onClick = {(e) => { this.resolveConflict()}}></input>
                Resolve Conflict
            </div>
            

            <div>
                Score = {this.state.score}
            </div>
        </div>
    }
}

export default ConflictResolverComponent;