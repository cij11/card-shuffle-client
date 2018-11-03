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

scenario = {
    data: {
        title: "Wired to Blow",
        type: "Task",
        paragraphs: [
            "The door to this room is wired to a complicated device. Cables snake over it, cylinders jut from it, and cylinders emblazoned with the symbols for bio-hazard, radiation hazard, and poison protrude from it.",
            "Flipping open a panel, you can see a tangle of different colored wires. Cut the right one, and the door will open. Cut the wrong one...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Creepy Ball",
        type: "Social",
        paragraphs: [
            "This lavish ballroom is filled with gents in tuxedos, and women in elegant gowns. The whole affair would seem festive... if any of the dancers said a word. Or had faces. They move in an intricate dance, flowing across the dance floor. Escape lies on the far side of the ballroom. While they don't seem violent now, you do not, not, NOT want to get in their way, or make any sound...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Submarine",
        type: "Social",
        paragraphs: [
            "The metal of the submarine surrounds you, oppressive and claustrophobic. You are being hunted by a ship on the surface above, and any sound could give away your position. If caught, the ship above will drop depth charges that could burst your skull with concussive force. ",
            "In hindsight, this probably wasn't a good time to challenge another crewmate to a rock off. Win. Survive. Rock.",
        ],
    }
};
scenarioCards.push(scenario);

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
        title: "Upside down house",
        type: "Navigation",
        paragraphs: [
            "Not just this house, but this entire world seems to be built upside down. Either that, or gravity has reversed just for you and your party. You have to get from the attic, to the ground floor, to the car at the end of the driveway. Careful, though. The sky yawns above you, a very, very long way up...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Flammable room",
        type: "Navigation",
        paragraphs: [
            "There's an acrid, sulfurous aroma in the air to this room. Your feet splash through puddles of oil. The furniture appears to be constructed from sticks of dynamite, and... yes, you can definitely smell a gas leak. A sweet old Nan in a rocking chair fumbles about for a box of matches, pipe already clasped in her lips.  ",
            "The door to exit this scenario stands open at the other end of the room.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Clock Tower",
        type: "Navigation",
        paragraphs: [
            "The inside of this clock tower is stuffed with grinding gears, swinging pendulums, and tightly coiled springs. With no staircase or ladder, it seems impossible to ascend without being mangled by the clockworks. But, that's exactly what you've got to go.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Haunted House",
        type: "Combat",
        paragraphs: [
            "The moon peaks through the dense clouds, a flash of lightning briefly illuminating this decrepit, looming mansion. Organ music plays in the background. Rumor has it that at least a werewolf, a vampire, a mummy, and Frankenstein's monster have taken up residence. But that can't be true.",
            "Survive one night to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Squirrel Army",
        type: "Combat",
        paragraphs: [
            "You've really done it this time. You angered the squirrels. They can climb. They can bite. They store nuts for the winter, and their numbers are legion. Every single squirrel on this planet wants you dead. Good luck!  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Roller Coaster",
        type: "Navigation",
        paragraphs: [
            "A bar comes down over your shoulders, locking you into your seat. Ahead of you, a normal roller coaster... except for the spinning blades, flamethrowers, pendulums, and the unfortunate fact that one end of the tracks points out over a cliff.",
            "Survive the ride.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Cabin in the Woods",
        type: "Combat",
        paragraphs: [
            "You should not have read the arcane text written on that dusty tomb. The woods around you seem to come alive. Some... THING is trying to get in. Or maybe it's hear already. ",
            "Survive the night to escape this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Zoo",
        type: "Combat",
        paragraphs: [
            "Lions and Tigers and Bears? Oh my! Without warning, every cage, gate, fence, and floodgate in this zoo falls open, releasing the animals inside.",
            "Try to escape, without becoming the meal of some hungry, vengeful predator. ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Field with Sheep",
        type: "Combat",
        paragraphs: [
            "You stand in the middle of a peaceful field, rolling hills tumbling in all directions. Sheep and cows stupidly chew in the background. Although... now that you think about it, they do seem to have surrounded you. In their hundreds. And do their eyes seem a little... red, to you? ",
            "Survive your encounter with vengeful livestock to escape this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Runaway train",
        type: "Combat",
        paragraphs: [
            "This train is barreling straight off a partially built bridge. You're in the caboose. Packed in every carriage, cabin, and cargo container are both passengers, and goons who have been given your description.",
            "Save the train to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Court Trial",
        type: "Social",
        paragraphs: [
            "You find yourself in a court room, hands clasped in manacles, burly guards on either side. The judge presides at one end of the court, while the prosecuting lawyer makes his case. You've been framed for a crime (DM's choice of crime and manner of framing). ",
            "All the evidence is against you. How can you prove your innocence?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Pendulum Bridge",
        type: "Combat",
        paragraphs: [
            "A narrow bridge extends over a deep ravine. Enormous pendulums swing back and forth over the bridge, ready to knock you off if they don't outright slice you in half. At the far end, a serpentine warrior stands, daring you to approach. What dark soul devised this nightmarish trap? ",
            "Cross the bridge to win the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Gladiatorial Arena",
        type: "Combat",
        paragraphs: [
            "The Colosseum surrounds you, cheering crowds braying for blood, lorded over by a cruel emperor. Opposing you, an intimidating array of opponents (DM's choice). ",
            "Fight for your life, but make it flashy, or the emperor will simply send more opponents until your luck runs out.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Hell",
        type: "Social",
        paragraphs: [
            "The screams of the damned surround you. A red skinned chap with a pitchfork looms over all, and when you get a hold of whomsoever playing that fiddle music you'll kill them. Again.",
            "You'll have to make a deal with the devil to get out of here, and he plays for keeps.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Divider",
        type: "Combat",
        paragraphs: [
            "This room has a single door leading out, guarded by a normal looking man who looks at you smugly.",
            "'I'm going to stop you getting out of this room. If I die, two will take my place'.",
            "To prove his point, he falls on his sword. In a puff of smoke, two stand where one there was one, each wielding a rapier.",
            "Escape this room to win the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Strobe room",
        type: "Combat",
        paragraphs: [
            "People dance all around you, as disco music thumps up through the ground. The disco is lit with strobe lights.  One by one, party goers drop dead, killed by some mysterious assassin. One of them must be responsible, striking between the flashes of the lights.",
            "Can you find and stop them before you yourself fall victim to the blade?",
        ],
    }
};
scenarioCards.push(scenario);



export default buildDeck('scenarios', scenarioCards);