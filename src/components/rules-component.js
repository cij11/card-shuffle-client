import React, { Component } from 'react';

class RulesComponent extends Component {
    render() {
        return (
            <div>
                <h2>My World Now</h2>
                
                <p>
                You walked through a door, or a portal. Or took a pill. Or fell asleep... or woke up.  
And now... you're here. Somewhere strange, surrounded by weirdos, confronted by something undeniably life threatening. Get out this predicament alive, and your reward?  
You're dumped right in another impossible challenge. 
Someone must be behind this. Someone must know what's going on. You'll play their game, for now. But once you know the rules...
You intend to win.  
                </p>

                <p>
                Each player draws a character card. The player gains all of the abilities and drawbacks of that character.
                </p>
                
                <p>
One player starts as the DM.
A different player starts as the Leader character.
                </p>

                <p>
                When a player becomes DM, they draw a scenario. Each scenario contains a challenge. The DM controls the challenge with an inflatible iron fist.
                </p>

                <p>
                It is the Leader's job to overcome the challenge. If the Leader succeeds, the entire group steps into/teleports into/is otherwise transported to the next scenario, and the next DM takes the reins.
                </p>







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
<p>If you have access to a Jenga tower, these can be used to resolve conficts. The DM checks boxes as normal. If the DM checks 0 or 1 box, the player must draw 2 jenga blocks. If the DM checks 2 or 3 boxes, the player draws a single jenga block. If the tower falls, the player fails.</p>







            </div>
        );
    }
}

export { RulesComponent };