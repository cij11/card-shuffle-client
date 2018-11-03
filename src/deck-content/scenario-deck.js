import { buildCard, buildDeck } from '../deck-building.js';

import scenario000 from './scenario-cards/scenario000';
import scenario001 from './scenario-cards/scenario001';
import scenario002 from './scenario-cards/scenario002';
import scenario003 from './scenario-cards/scenario003';

const scenarioCards = [];
let scenario;

scenario = {
    data: {
        title: "TestTitle",
        type: "Combat",
        paragraphs: [
            "Under",
            "Construction",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Key to the city",
        type: "Combat",
        paragraphs: [
            "The frightened townsfolk run about in panic, alternating between fleeing, looting, and pointing at something horrible and shrieking. Whatever has beset this community (DM’s choice), a hero is required to put a stop to it. Once the city is safe, the group will be whisked away, before time for even a thank you...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Generation Ship",
        type: "Task",
        paragraphs: [
            "You stand in a large room. Huge windows show the engines of your space ship. Beyond, you can see stars whipping past in the blackness of space. All around you are glass tubes, where sleeping people float suspended in vats of viscous fluid. A large clock takes up most of one wall, reading ‘T -minus 999 days until ship reaches the exit.’ Hopefully you’ve got a plan, or this will be one looooong voyage...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Hell is other people",
        type: "Task",
        paragraphs: [
            "You fall through a trap door, and land in this room. Glass barriers segment this into a row of individual cells. You can see each other, and perforations in the glass let you talk to each other. You can’t touch each other, though, or exchange items much wider than a piece of wire or strand of hair. ",
            "The DM will whisper, or otherwise secretly give a key-phrase to the Leader. This message must pass through all players, to the most distant player. The more the final player recites the message, the greater the chances of escaping this scenario. Otherwise, you hate to think where the trapdoor beneath you leads...  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Recursive Dollhouse",
        type: "Combat",
        paragraphs: [
            "You find yourself in a dining room, holding a doll’s house. Looking through the upstairs window, you see you and your party, standing in a dining room, clustered around a tiny version of you, holding a... doll’s house. ",
            "You can see sinister figures creeping through the other rooms, stop motion figures closing in on the party. The only escape: The front door of the house.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Auction house",
        type: "Social",
        paragraphs: [
            "You find yourself in the audience of an auction. The auctioneer’s voice is going a mile a minute, selling this and that quicker than you can comprehend. The next item, though, gets your attention: Escape.",
            "Looking around, you see the other bidders. A man in prison garb with a ball and chain. A Houdini type, done up in a straight jacket. A tired looking man in unkempt office attire, unsuccessfully ignoring his bleating partner. This... this could be a popular item...  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Conveyor Floor",
        type: "Navigation",
        paragraphs: [
            "You’re at one end of a hallway. At the other: A door. Seems simple enough. Walking out, the floor is strangely yielding, rubbery beneath your feet. At the halfway point... it starts to move. For every step you take forward, it moves back that much beneath you. The faster you run, the faster it conveys. How will you get to that door?  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Invisible Maze",
        type: "Navigation",
        paragraphs: [
            "This huge room seems entirely empty. Just you, your group, 100m of empty space, and the exit door. You take a confident stride forward... and walk smack into a glass wall.  This entire level is filled with an invisible maze. Even from here you can see that the locked door will need a key, which you can see in the middle of the maze, so the ‘stick to the left wall trick’ will only go so far.  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "War-zone",
        type: "Combat",
        paragraphs: [
            "“Get up, Maggots!” You stand to attention. Some of the dying soldiers around you look up, and even the dead ones do their best to look presentable. The sergeants voice booms out, gruff and implacable. “Yes, the enemy is formidable. Yes, they have killed 90% of us, 99% of the time we’ve attacked them. But this time... I’m feeling lucky.” He grins like a madman, as the enemy (DM's choice) comes into view ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Data Monger",
        type: "Social",
        paragraphs: [
            "Next to the exit door is a little booth, where a sensible little man with a sensible little suit writes with neat sensible script in a sensible little book. Behind him, rows and rows of shelves hold hundreds of books, all filled with his sensible little lettering. ",
            "This man buys and sells secrets. There's not much he doesn't already know. He'd be happy to sell you the secret for escaping this room... in exchange for a new secret of equal or greater value (Examples would be a dark secret held by the character, or about one of the other characters.)",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "The Millionth Floor",
        type: "Task",
        paragraphs: [
            "You are in an elevator, traveling to the exit on the millionth floor. Unfortunately, some precocious bra has pushed all 999,999 buttons beneath it. The elevator stops on every floor. The doors open on every floor. Close on every floor, and travel exactly one floor up... before doing it all again. How will you make it there, before the inevitable heat death of the universe?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Dickish Whale",
        type: "Combat",
        paragraphs: [
            "You stand on a ship, the deck rocking beneath your feet as you struggle to hold the harpoon gun. In the water, you see briefly see a glimmering golden feather... before the voluminous mouth of a whale swallows it in one huge gulp.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Lions and Tigers and Bears and Upholstery",
        type: "Navigation",
        paragraphs: [
            "The floor of this room is and oddly lumpy fur rug. Worryingly, it's... Moving? Dozens of different species of dangerous animal have been sewn into a heaving rug covering the floor. Surprising, they seem quite content with this arrangement... Up until someone stands on them. The exit lies on the other side of the room.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Urban Tarzan",
        type: "Navigation",
        paragraphs: [
            "A bottomless pit stretches out beneath you. From the ceiling high above hang dozens of what look like different colored ropes. On closer inspection, the ropes are made from all different materials: rope, knotted sheets, barbed wire, dental floss, what you hope is a stuffed snake, and more. You will have to swing between three ropes to cross the chasm, but can only identify those closest to you.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Temple of RUN AWAY",
        type: "Navigation",
        paragraphs: [
            "On entering the room, you hear an ominous rumble behind you. A massive Boulder is rolling along the corridor behind you. Pits, blow-darts, and hurdles lie in the path. Can you get to the open door at the other end of the tunnel?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Sewer",
        type: "Navigation",
        paragraphs: [
            "Every game has one. Congrats on finding this one. Filled with alligators, flammable gas, and... Ummm... Slime? You have to get through the dark maze of tunnels, avoid the noxious and toxic dangers, and escape up through a manhole.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Sewer",
        type: "Navigation",
        paragraphs: [
            "Every game has one. Congrats on finding this one. Filled with alligators, flammable gas, and... Ummm... Slime? You have to get through the dark maze of tunnels, avoid the noxious and toxic dangers, and escape up through a manhole.  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Ant-farm",
        type: "Combat",
        paragraphs: [
            "You're standing on what seems to be sand. Above you? Also sand. But on either side are walls of thick, unyielding glass. This must be what it feels like to be an ant in an ant-farm...  When you see the first mandibled jaw poke down from the ceiling above, you realize that's exactly where you are. But you're the same size as them. The only escape? Kill their queen. But they're already closing in on the intruders...  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Tetris",
        type: "Navigation",
        paragraphs: [
            "You are standing on something firm, but yielding. A weird synthesized 'boing' sound resounds when you try to jump. The same material forms a wall to the left and right. You can hear a synthetic tune playing in your ear, repetitive enough to drive you near insane. Suddenly, a shadow passes over you. A bright pink tetromino looms above you, moving left, right, rotating... then dropping. You're stuck in a game of Tetris. You must survive long enough to clamber out the top.  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "The Human Show",
        type: "Social",
        paragraphs: [
            "Everyone in this small town seems... Weird. Like they're reading a script, or taking cues from an earpiece. And is that a hidden camera? You've got to get out of here, but the townsfolk/actors will do everything they can to keep the stars of their from escaping the domed village that serves as the set of the most popular TV show ever... all without breaking character.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Time Travel paradox - Part 2",
        type: "Combat",
        paragraphs: [
            "This room contains 2 doors. Just before opening the door, there's a brilliant flash, and an exact duplicate of you, wearing your clothes, steps out of a swirling portal.",
            "'I'm you, from the future! Don't go through that door!'",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Time travel paradox - prequel",
        type: "Combat",
        paragraphs: [
            "You enter this room through a door, and see 2 doors on the opposite wall. Suspended over one door is a tonne of bricks. Before you can act, the door swings open. An exact duplicate of you walks through the door, and is crushed to a pulp when the bricks drop. The door to the next room says '5 minute time machine' above it. ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Resourceful Scottish Guy",
        type: "Task",
        paragraphs: [
            "Your feet are encased in setting cement. Across the bay, a helicopter starts up as the bad guy prepares his getaway, while just out of reach a clock ticks, nestled in a nest of wires and dynamite.",
            "And the only things you can reach? 2 rubber bands, a paperclip, a newspaper, 1 magnet, an egg carton, bubblegum, 3 feet of string... and your trusty Swiss Army knife.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Fighting Monsters",
        type: "Combat",
        paragraphs: [
            "The kid in front of you can't be more than 10 years old. He stands with his hands on his hips, then points at you, and declares 'You've come this far, but can you defeat my (DM's choice of monster/creature)!' ",
            "He throws something, a bolt of lightning strikes the middle of the room, and a weird creature looks at you.  ",
            "Clearly, fighting the creature yourself would be against the rules, as would walking over and decking the kid. Who will you send out to challenge the beast?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Home with Company",
        type: "Combat",
        paragraphs: [
            "Is the world larger? Or are you just smaller...  Looking into a mirror, you can see that you and all your companions are no more than 10 years old. You slap your cheeks and scream... but that's not your biggest problem. Assassins are entering your house. You know the 2 stories and a basement back to front, along with all the tools, toys, appliances, and vehicles within. Alas: No firearms. Survive the night, survive the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Boxing Ring",
        type: "Combat",
        paragraphs: [
            "Ding ding ding! You come to awareness with the dinging of a bell. One of your group members is your coach, yelling advice in your ear. Big soft glove are secured to your hands. And in the opposing corner...  ",
            "A monster. A brute. A creature so looming and vicious that the very earth shudders beneath its feet (DM's choice.)  You must survive three rounds. Have fun!  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Empty Room",
        type: "Task",
        paragraphs: [
            "The door on the other side of this room swings open. The wall paper is a single line of text, repeating over and over: 'description goes here'. There is no obvious challenge or obstacle in your way that could prevent you from just walking out of this scenario and into the next one. ",
            "Wow. If this placeholder scenario makes it into the final product, someone really needs to get fired.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "'Empty' Room",
        type: "Task",
        paragraphs: [
            "(DM Instructions: DO NOT READ THIS OUT LOUD. This room contains a trap, the nature of which is up to you. Snake Pits, swinging blades, 10 ton weights, and bees are classic examples. Please read the following description:)",
            "The door on the other side of this room swings open. The wall paper is a single line of text, repeating over and over: 'description goes here'. There is no obvious challenge or obstacle in your way that could prevent you from just walking out of this scenario and into the next one. Wow. If this placeholder scenario makes it into the final product, the editor really dropped the ball on this.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Sinking Ship",
        type: "Task",
        paragraphs: [
            "The iceberg has done its damage, and the ship is going down. You're below decks, and the water is already up to your knees. You've got to get to a life raft... just like the other thousand odd panicked human beings. ",
        ]
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Melee with Cheese",
        type: "Combat",
        paragraphs: [
            "You've been dropped on an island, with along with your team, and 99 other murderers and psychopaths. To win this twisted game, you and your group must be the only people left alive, standing atop the tower in the middle of the island.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Mirror room",
        type: "Task",
        paragraphs: [
            "As you enter this room, an identical group enters from the opposite door. Every move you make they mirror. Getting in the middle you try to walk around them, but they move in the same direction and accidentally block your passage. If you speak, they say the exact same words at the exact same time.",
            "How can you get out the door they entered from?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Bouncer",
        type: "Social",
        paragraphs: [
            "There is a line of people waiting to get through the next door, the line kept orderly by a velvet rope. A burly man in a tight black shirt and sunglasses stands, arms folded, letting people in or turning them away as he pleases. You've got to make it inside to win this scenario, but that most daunting of obstacles stands in your way: Judgment of your inherent worth by an authority figure in front of a crowd.",
        ],
    }
};
scenarioCards.push(scenario);


export default buildDeck('scenarios', scenarioCards);