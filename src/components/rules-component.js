import React, { Component } from 'react';

class RulesComponent extends Component {
    render() {
        return (
            <div>
                <h2>My World Now</h2>
                
                <p>
                    My World Now is a game for 3 to 6 players.
                </p>

                <p>
                    Improbable characters square off against impossible challenges, to the amusement, scorn, and horror of their friends and loved ones.
                </p>

                <p>
                    At the start of play, randomly pick one player to be the 'Master', and a different player to be the 'Leader'. The role of Master and Leader will rotate clockwise during play, as scenerios are passed or failed.
                </p>

                <p>
                    At the start of the game, each player draws a character card. When they are the 'Leader' or just in the Group, the player gains all of the abilities and items of that character.
                </p>

                <p>
                    When a player becomes Master, they draw a scenario. The Master controls everything about the scenario, except for the players. They choose the things that exist, and the way creatures behave.
                </p>

                <p>
                    Each scenario has a challenge. It is the Leader's job to overcome the challenge. It's the Master's job to simulate the challenge, and the world around it.
                </p> 
                <p>
                    Each Turn consists of three phases:
                    <ol>
                        <li>Preparation</li>
                        <li>Execution</li>
                        <li>Resolution</li>
                    </ol>
                </p>

                <p>
                    <h3>
                        Preparation
                    </h3>
                    <p>
                        During preparation, a Leader is feeling out the scenario. They can look at things, touch things, do things, and talk to people. The Master tells the leader what they see, what happens, and replies on behalf of the characters they talk to. The Leader can do whatever they want, as long as 
                        <ol>
                            <li>
                                They are careful.
                            </li>
                            <li>
                                The Master is not getting bored. This tension between careful and intersting will almost inevitably lead to...
                            </li>
                            <li>
                                ...Conflict.
                            </li>
                        </ol>
                    </p>
                    <h3> 
                        Execution
                    </h3>
                    <p>
                        At some point in the scenario, a conflict will occur. Maybe the player has been seen. Or contradicted. Or obstructed. Or exploded. Either the Leader has done something that is not trivial, or something is about to happen to the Leader that they need to deal with.
                    </p>
                    <p>
                        The Leader will state their plan for dealing with the conflict. The Master, or the Group, may interupt them with minor hints of objections, but ultimately it is up to the Leader to state their plan...
                    </p>
                    <h3>
                        Resolution
                    </h3>
                    <p>
                        The Master will listen to the plan, and any objections and modifications arising from anyone playing. They must then check the boxes in the 'Conflict Resolution' panel to assess the Leader's plan... before tapping 'Resolve Conflict'.
                    </p>
                </p>

                <h2>
                    The Next Turn
                </h2>
                <p>
                    On a success, the Leader succeeds! The Group moves into the next scenario. The Leader and the Master both shift one player clockwise, with the new Master drawing a Scenario.
                </p>
                <p>
                    On a failure, the Leader fails. They perish. Horribly. The Master narrates the old Leader's graphic demise, and life goes on. 
                </p>
                <p>
                    The defeated Leader draws a new character, and awaits their next turn. The new Leader shifts one player clockwise. The new Leader faces the same Scenario and the same Master, with their recently departed comrade fresh in their mind...
                </p>
            </div>
        );
    }
}

export { RulesComponent };