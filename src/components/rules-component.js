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
                        During preparation, a Leader is feeling out the scenario. They can look at things, touch things, do things, and talk to people. The Master tells the leader what they see, what happens, and replies on behalf of the characters they talk to.
                    </p>
                    <h3> 
                        Execution
                    </h3>
                    <p>
                        At some point in the scenario, a conflict will occur. Maybe the player has been seen. Or contradicted. Or obstructed. Or exploded. Either the Leader has done something that is not trivial, or something is about to happen to the Leader that they need to deal with, or perish.
                    </p>
                    <p>
                        The Leader will state their plan for dealing with the conflict. The Master of the Group may interupt them with minor hints of objections, but ultimately it is up to the Leader to state their plan...
                    </p>
                    <h3>
                        Resolution
                    </h3>
                    <p>
                        The Master will listen to the plan, and any objections and modifications arising from anyone playing. They must then check the boxes in the 'Conflict Resolution' panel to assess the Leader's plan... before tapping 'Resolve Conflict'.
                    </p>
                </p>
                    
                    <p>

                    </p>
                    If the Leader succeeds, the 'Leader' and 'Master' role shift clockwise. If the Leader fails, the s
                

                <p>
                    The scenario contains some explicit details, but the DM is free to embelish or invent any details they like to flesh out the scenario, and what it means to succeed or fail.
                </p>
                <p>
                    The Leader may ask the DM questions about the scenario that their character could reasonably be expected to know. i.e, things that they can see or hear. More subective questions (i.e, does this person look angry?) Are at the discretion of the DM, keeping in mind the character the Leader is playing. Leaders should avoid questions of the type "Do I think I can..." (i.e. Do I think I can jump this pit.) A better question would be "How wide is this pit?". They may investigate their surroundings, up until the point where the investigation becomes dangerous, or the DM tires of their questions. This point is at the DMs discretion. At this point, the DM instructs the Leader to make a plan to resolve, survive, avoid, defeat, or otherwise overcome the challenge.
                </p>

                <p>
                    (Put a note on group participation here. Encouraged, but not required. Importantly, team members side with the Leader, not the DM.)
                </p>
                <p>
                    The DM then rates the plan, by checking as many boxes as apply
                </p>

                <p>
                    <ul>
                        <li>
                        Plausible: +1
                        </li>
                        <li>
                        Fitting or appropriate for Character: +1
                        </li>
                        <li>
                        Made any player laugh: +1 
                        </li>
                    </ul>
                </p>

                <p>
                    After checking the appropriate scores, the DM presses 'Attempt plan'.
                </p>
                <p>
                    On a success, the Leader succeeds! The party moves into the next scenario. The Leader and the DM both shift one player clockwise.
                </p>
                <p>
                    On a failure, the Leader fails. The Leader expires, in as much mean spirited detail as the GM can muster. The player draws a new character. The Leader shifts one player clockwise. If the player one player clockwise is the DM, skip past the DM to the next player.
                </p>

                <h3>A note on randomization.</h3>

                <p>
                    This game can be played on a single device, or on multiple devices.
                </p>

                <p>
                    If playing on a single device, simply pass around the device, draw a character each, then pass the device to the first DM to start playing! 
                </p>

                <p>
                    If playing on multiple devices, the game needs to be set up on each device so that each player gets their own unique deck of cards.
                    This game uses a 'seed' word to shuffle the deck, and then splits the deck between each player. 
                    So: Make sure you all have the same seed, or you might get double ups in the deck.
                    Make sure you all pick a different player number. Players that pick the same number will get the exact same deck! 
                    Pick a different seed for each game, or use the random seed the game has generated. Using the same seed will give the same cards, in the same order.
                </p>

                <h3>Alternate Conlict Resolutions</h3>

                <p>
                    If you have access to a Jenga tower, these can be used to resolve conficts. The DM checks boxes as normal. If the DM checks 0 or 1 box, the player must draw 2 jenga blocks. If the DM checks 2 or 3 boxes, the player draws a single jenga block. If the tower falls, the player fails.
                </p>

            </div>
        );
    }
}

export { RulesComponent };