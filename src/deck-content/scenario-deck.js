import { buildDeck } from '../deck-building.js';

const scenarioCards = [];
let scenario;

let capCard = {
    data: {
        title: "Scenario Deck",
        type: "CapCard",
    }
}

scenario = {
    data: {
        title: "partiallyBuiltBehindTheScenesRoom",
        type: "Navigation",
        paragraphs: [
            "Warning",
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

scenario = {
    data: {
        title: "Hostage Situation",
        type: "Social",
        paragraphs: [
            "One of your group members (DM choice or Random) has been taken hostage by bad men. They want something precious of yours (DM's choice).",
            "Resolve this situation to win the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "High Speed Chase",
        type: "Navigation",
        paragraphs: [
            "You're behind the wheel of a vehicle just big enough to fit your party. Flashing red and blue lights fill your rear view mirror, as you dodge and weave between cars in the busy city streets.",
            "Escape!",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Carnivorous jungle",
        type: "Combat",
        paragraphs: [
            "The jungle closes in all around you. Dense foliage looms high into the sky, blotting out the sun. Hot, humid, oppressive... and dangerous. Venus fly traps the size of venous lick their lips. Vines snake and writhe on the ground. Bell traps the size of a man wait to trap the unwary. And they've all grown huge by gorging on mosquitos the size of pelicans and millipedes as long as your leg.",
            "Cross the jungle to leave this horrible place behind. ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Snow place like home",
        type: "Task",
        paragraphs: [
            "Twinkling snow crunches beneath your feet as you walk towards a rustic little cottage. When you get there, the door wont open. Because the cottage is fake, a model baked out of clay. And this snow is... glitter?",
            "You are trapped in a snow globe. You can see the world outside, and other objects on the shelf you're sitting on. How can you escape?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Friction-less room",
        type: "Navigation",
        paragraphs: [
            "As soon as you enter this room, you fall flat on your rump and start to skid. Friction, it seems, has given up on this room. Anything you hold slides from your grasp, and your pants are making a slick bid for freedom.",
            "Get to the door, and open it. Should be simple, right?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Sports Ball",
        type: "Task",
        paragraphs: [
            "A whistle blows. It's game time. Around you, a densely packed stadium cheers exuberantly. You've been dropped in the middle of the (DM's choice) grand final and play has just commenced. The umpire watches like a hawk.",
            "By means fair or foul, you must win this match.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Sleeping Dragon",
        type: "Navigation",
        paragraphs: [
            "A heap of gold glimmers and twinkles in the center of this cave. Atop, a slumbering dragon. Steal a single piece of treasure to defeat this scenario.",
            "Oh. And also, the cave is littered with mouse traps, whoopee cushions, potato crisps, and a single inexplicably squeaky floorboard.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Literal Pun Room",
        type: "Task",
        paragraphs: [
            "This room is an infinite field of white. Until someone says 'I can't see anything!'. At which point, a sea appears, the waves lapping at your feet. 'Okay... what's going on here?' A fluffy hare bumps into your foot, long ears sticking up, head tilted quizzically to one side. How would it know? ",
            "You must leave this place. Crunchy autumn leaves form piles all around you.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Trash Compactor Room",
        type: "Task",
        paragraphs: [
            "You are dumped into a pile of refuse, rancid water rising to your hips. Just when things couldn't get any worse... they do. The walls start closing in, the trash compactor pressing around you.",
            "Escape or Survive.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Zeppelin Pirates",
        type: "Combat",
        paragraphs: [
            "Whoever said it was a bad idea to fill a Zeppelin with hydrogen had no idea what they were talking about. For air pirates, hydrogen is the only choice. A fat and slow helium zeppelin lumbers ahead of you. ",
            "Pillage and plunder to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Public Speaking",
        type: "Social",
        paragraphs: [
            "You are standing in front of a crowd of thousands, cameras pointing at you from all directions. You have no idea what the occasion is, what they are expecting, or what to do. The DM will pick an event, but is not obligated to tell this event to you.",
            "You must deliver a speech which receives a standing ovation. ",
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
        title: "Planetarium",
        type: "Navigation",
        paragraphs: [
            "In the center of this circular room sits a blazing Sun. A complicated arrangement of clockwork planet and moons orbit it, traveling along circular tracks. The Sun is painful to look at even at a distance. Everything inside the room is scorched to cinders. The only safe places are in the shadows of the planets and moons, but those are in constant, rapid motion. ",
            "Make it to the other side of the room.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Waterfall",
        type: "Navigation",
        paragraphs: [
            "You're captain of a ship. Not the best captain. Nor the best ship. But the captain, none-the-less. Another captain would have turned the ship around before getting within the pull of the waterfall. A better ship would have life rafts, not that they would help in this exact situation. As it stands, crew, passengers, and sailors are looking at you for guidance, as the ship accelerates towards the precipice.",
            "Orders, captain?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Laser grid",
        type: "Navigation",
        paragraphs: [
            "This smoke filled room is criss-crossed with twinkling red laser lights. Maybe they set off an alarm. Maybe they set off an explosive. Or maybe they just cleanly bisect anything who's path crosses them, neatly cauterizing the stump.",
            "Best not to touch anything on your way to the exit.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Stay Puffed",
        type: "Combat",
        paragraphs: [
            "A voice booms out, making you jump. 'You will choose the form your annihilation will take.' Try to keep your minds blank, people, because the next noun any of you mentions will be brought to life as a 60 foot monster, crashing through the town of this scenario. ",
            "Defeat the menace to save the town and win the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "On Show",
        type: "Social",
        paragraphs: [
            "This room looks like a gymnasium. Parallel bars, balance beams, rings and mats litter the floor, and a stage stands at one end. There's nothing technically stopping you from just crossing the room and leaving through the opposite door, but there's something oddly sinister about the three plainly dressed middle aged judges sitting behind a desk, holding score cards. ",
            "Better get at least a 6.0 for your performance, or you're out.  ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Under Siege",
        type: "Combat",
        paragraphs: [
            "You find yourself in a medieval castle. The gate shakes as invaders try to batter it in, while ladders hit the walls and trebuchets rain down rocks. ",
            "Survive the siege to survive the scenario.",
            "(Paired card! If the plan 'Besieging' has been drawn, that will be the plan you defend against.)",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Besieging",
        type: "Combat",
        paragraphs: [
            "You and your army assail the walls of a medieval castle. You've got catapults, battering rams, ladders, siege towers, and a thousand men at arms, but the defends have arrows, thick walls, and pots of scalding oil. ",
            "Sack the castle to win this scenario.",
            "(Paired card! If the plan 'Under siege' has been drawn, then that is the plan you overcome.)",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Virtual Reality",
        type: "Task",
        paragraphs: [
            "Explosions blossom around you, space ships flying overhead, and hordes of alien monsters surround you. Everything has a slightly unreal, low polygon aesthetic, though. Walking a few meters in one direction, you bump into an invisible wall. ",
            "What's going on? How can you escape this less that virtuous reality?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Bridge Keeper",
        type: "Social",
        paragraphs: [
            "A wizened old man stands in the middle of this bridge, interrogating any who pass. ",
            "Fail to answer his question correctly (DM's choice) and you will explode violently, leaving only a pair of smoking boots.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Construction Demolition",
        type: "Combat",
        paragraphs: [
            "Everyone at this construction site has gone stark raving made. A half built skyscraper looms overhead, while below, diggers, bulldozers, and even cranes fight to the death. You find yourself behind the wheel of one such vehicle. ",
            "Last person standing wins.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Game of skill",
        type: "Task",
        paragraphs: [
            "A moat separates you from the other side of this room and the door, seemingly infinitely deep and a good 2m wide. On your side of the moat are a number of rubber rings, balls, and water guns. On the other side, a shifty carnie mans a collection of games of skill.",
            "He'll drop the bridge across the moat... after you pay a fee and win a game, of course. ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "The Vents ",
        type: "Navigation",
        paragraphs: [
            "The square, metal walls of the vent close around you claustrophobically. The maze of vents forks and loops around on themselves. Guards chatter inaneley in the complex of offices and labs beneath you, but they're the least of your concern: You think you're not alone up here.",
            "You just need to get to get out through the vent's main air intake... ",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "The Playpen",
        type: "Navigation",
        paragraphs: [
            "The world seems very big, or maybe you're just very small. You and all your team are toddler versions of themselves, and their equipment is all toy versions of it. You can hear warbling, impossibly deep and incomprehensible voices of looming, out of sight giants.",
            "Escape across the street to win the scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Trapped in 'literature'",
        type: "Navigation",
        paragraphs: [
            "You're trapped in a magazine or a book (Dms choice.) The page or article seems alive around you. In each page, you must make the reader so interested in the story (for a book) or so disgusting , bored, or annoyed at the article (for a magazine) that they simply must get to the next page. 3 pages to escape.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Infuriating Vending Machine",
        type: "Navigation",
        paragraphs: [
            "The MacGuffin for this scenario to this is inside a vending machine. You inserted your money, the roller span... But did not drop the MacGuffin. This is unacceptable.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Golden Ticket",
        type: "Navigation",
        paragraphs: [
            "You need a ticket to win this scenario. It lies in one of a thousand food items (DM's choice) in a hundred shops around the town. The competition is fierce. How do you ensure victory?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "How I learned to stop worrying and love this game",
        type: "Task",
        paragraphs: [
            "In an underground bunker, neon dotted lines trace the path of nuclear missiles, bombers, and submarines across a map. You have full command, and a red phone gives you a direct line to the opposing general. Your teammates are locked in bunkerd of their own. Survive to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Aquarium",
        type: "Navigation",
        paragraphs: [
            "You are surrounded on all sides by water. Jellyfish, sharks, and other dangerous creatures fill the water around you. One glass wall shows the aquarium beyond, where a small child eats an ice cream, watching you with astonishment. Escape before you drown and/or are eaten.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Kung Fu Fighting",
        type: "Combat",
        paragraphs: [
            "You are wearing a Gi, standing back to back in a circle with your group. Black clad assailants outnumbered and surround you, each armed with a different weapon, inexplicably attacking one at a time. Survive the onslaught to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Heist",
        type: "Task",
        paragraphs: [
            "The key lies in a locked box, in a safe, in a guarded room, at the back of a casino filled with cameras. Your job: case the joint, then assign jobs to your Group to pull off an acceptable heist.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Unleash the hounds",
        type: "Combat",
        paragraphs: [
            "The back yard of this eerie mansion is surrounded by high wrought iron gates, tipped with spikes. Looking, cracked statues, fountains, and sundials fill the courtyards. The house itself has no ground floor windows, and a looming door. You have to get in before someone releases the hounds... Or else flee the property in one piece after. The player may make a second plan to flee if their first plan fails.",
            "Success on the second plan means the player does not die. Subsequent leaders must venture into the mansion with the dogs prowling.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Hypnotist",
        type: "Social",
        paragraphs: [
            "This should be easy enough. Step off the stage, walk past the crowd, and out the front door. But why is everyone laughing? Because the stage magician running this show has given you three beliefs, traits, or compulsions (1 DM's choice, 2 group's choice).",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Bring Her In",
        type: "Task",
        paragraphs: [
            "You're the pilot. The tower is trying to bring you in.",
            "Follow their instructions to the best of your abilities.",
            "Unless, of course, you're evil",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Volcano",
        type: "Task",
        paragraphs: [
            "An erupting volcano disgorges lava down the mountain side.",
            "You have catapults that toss enormous boulders, and helicopters wielding monsoon buckets of water. Oh, and villagers, but what can they do?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Voltreque",
        type: "Combat",
        paragraphs: [
            "You find yourself in a tiny cockpit, controls and panels all around you. You're controlling the head of a giant robot. Your team mates control other limbs. Through the eyes of the robot, you can see your foe: a giant (DM's choice.)",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Balloon-O-Rama",
        type: "Navigation",
        paragraphs: [
            "5 bunches of balloons are tied to your shoulders, and 5 sandbags to your feet. Floating a few hundred feet in the air, a strong breeze pushes you through a gauntlet of... (DM's choice)",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Pyrrhic Cloned fight",
        type: "Combat",
        paragraphs: [
            "There are a thousand of you, vs a thousand evil clones of a member of your Group (Group votes, DM tiebreaker).",
            "Both of you make a battle plan. If more even one more of you survives than them, you win the scenario."
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Long Range Laser Fight",
        type: "Navigation",
        paragraphs: [
            "You're holding a laser that can shoot for miles, and a reflective mirror shield strapped to your arm. A mile away across the terrain of (DM's) choice, you can make out the small figure of your similarly armed opponent. They wave, counts down from 3 on their fingers, and take aim...",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Buried Alive",
        type: "Task",
        paragraphs: [
            "The entire group is squashed together in pitch darkness. Wooden panels surround you, a thin avalanche of dirt falls from above, and oxygen is running out. You've all been buried alive.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Desert Island",
        type: "Navigation",
        paragraphs: [
            "Shipwreck and waterlogged, there's nothing on this island but a palm tree, a dozen odd monkeys, sand, buried treasure, and an oddly sympathetic volleyball. Ships and planes occasionally appear on the horizon, but how can you escape?",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Angry Mob",
        type: "Social",
        paragraphs: [
            "They're after with pitchforks and flaming torches. Maybe they'll calm down in the morning, but now they're hungry for blood.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Big Endian",
        type: "Combat",
        paragraphs: [
            "The date is Current Year, Current Month, Current Day.",
            "Any army approaches you, and first you think they're very far away... before you realise they are merely very, very small...",
            "Standing next to you is a person in the garb of a court jester, who offers to assist whoever they may, on this gorgous day of month-day-year."
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Little Endian",
        type: "Combat",
        paragraphs: [
            "The date is Current Day, Current Month, Current Year",
            "Any army approaches you, and at first you think they must be right upon you... before you realise that they are in fact absolutely ginourmous.",
            "Standing next to you is a person in a straight jacket who offers to help you any way they can, on this gorgous day of month-day-year."
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Board Game",
        type: "Task",
        paragraphs: [
            "You're trapped as a board game piece (DM's choice of game and game state, then your choice of side and piece.)",
            "Your movements and actions are constrained to those of your piece, physically and conceptually.",
            "Win the game or escape the board to win this scenario.",
        ],
    }
};
scenarioCards.push(scenario);

scenario = {
    data: {
        title: "Space Opera",
        type: "Navigation",
        paragraphs: [
            "You look down on a holographic map of the galaxy, twinkling with stars, Criss crossed with trade routes, and blinking with the colored icons of ships and stations.",
            "By means diplomatic or militaristic, secure your people's place in this far future.",
        ],
    }
};
scenarioCards.push(scenario);



export default buildDeck('scenarios', scenarioCards, capCard);