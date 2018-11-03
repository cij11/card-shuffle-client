import { buildDeck } from '../deck-building.js';

import character000 from './character-cards/character000.js';
import character001 from './character-cards/character001.js';
import character002 from './character-cards/character002.js';
import character003 from './character-cards/character003.js';

const characterCards = [];
let character;

character = {
    data: {
        title: "BlankSlate",
        paragraphs: [
            "CollaborationBetween",
            "You",
            "CurrentDM",
            "AndTheGroup",
        ],
        rules: [
            "YouDecideOne",
            "CurrentDMDecidesOne",
            "GroupDecidesOne",
        ],
        items: [
            "YouDecideOne",
            "CurrentDMDecidesOne",
            "GroupDecidesOne",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Ghost",
        paragraphs: [
            "You’re dead, but not departed. Your specral form persists in this world, dripping ectoplasm everywhere. ",
        ],
        rules: [
            "You can possess living creatures for a short period.",
            "You can move through most objects, but not the walls or door of the room. ",
            "You can lift and toss objects with telekinesis, but lack the fine motor skill to insert keys or turn door knobs in your (un)natural form. ",
        ],
        items: [
            "None",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Horrible Alien",
        paragraphs: [
            "You’re a fanged, looming, slavering, slimey Alien abomination. Other party members give you a wide bearth.  ",
        ],
        rules: [
            "You can climb on walls.  ",
            "You cannot talk.  ",
            "You can spit acid, which disolves most things, including walls or rock to a depth of a few inches.",
            "Any living creature except your group will immediately try to fight or flee from you.",
            "Your group will stay as far from you as the situation allows, and will not assist you directly unless it will increase your distance from them.",
        ],
        items: [
            "None",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Barbarian",
        paragraphs: [
            "Who needs armor, or common sense, when you’ve got all... these... muscles! Walls are an inconvenience, and enemies a distraction. If your only tools are fists, the whole world starts to look like a punching bag.  ",
        ],
        rules: [
            "You have a good chance of beating literally anything in a fist fight, provided you’re angry enough.",
            "You have an extremely short temper, and will become violent with anyone who does not immediately comply. ",
        ],
        items: [
            "Massive Axe",
            "Tiny loincloth +/- top",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Support",
        paragraphs: [
            "You’ve always been second fiddle. A sidekick. A healer. A squire. It’s a thankless job toiling behind the scenes, and no one will ever know just how much you accomplish with the help of your clueless companions.  ",
        ],
        rules: [
            "Every conflict you resolves involves you tricking or convincing your team mates to take all the risks for you.  ",
            "Your team mates abilities are doubled when acting under your influence. This could mean twice as strong, twice as much wealth, or whatever ‘double’ could possibly mean in the context of their own abilities.  ",
        ],
        items: [
            "Whistle",
            "Parachute",
            "Flare gun",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Detective",
        paragraphs: [
            "It’s all so... elementary. You an see how the clues hang together, all the parts falling into place until the answer lights up in your head in neon lights.  ",
        ],
        rules: [
            "You are a master interigator. You immediately know if anyone is telling the truth or lying to you.",
            "You are a master investigator. You immediately see every detail of something you turn your attention to.  ",
            "You are addicted to opium. ",
        ],
        items: [
            "Pipe",
            "Magnifying glass",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Redshirt",
        paragraphs: [
            "The other party members are so interesting, so talented, so... important. You are not. You are, in a word... expendible. ",
        ],
        rules: [
            "No matter how good your plan, you will die in every scenario you lead, regardless of if you succeed.",
            "I you succeed at the scenario, you will take the role of a different redshirt (with a different name and physical appearance) who enters the next scenario.  ",
            "If you fail a scenario, no successor will take your place, and you should draw another character card as usual.  ",
        ],
        items: [
            "Red shirt",
            "Random item of current DM's choice, for each new Reshirt.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Zombie",
        paragraphs: [
            "You hunger for brains... and for beating scenarios. ",
        ],
        rules: [
            "You cannot talk.  ",
            "Intelligent NPC’s will attack you on sight or flee from you, but only a blow to the head will kill you.  ",
            "Any enemy you kill will return as a zombie. They loosely follow your instructions, but are incapable of speech or complex motor actions. They will follow you into the next scenario, if they have not been destroyed.",
        ],
        items: [
            "Tattered clothes",
            "Detachable eye",
            "Wandering hand",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Ball",
        paragraphs: [
            "You are a ball. More than that, you are the sentient embodiment of all balls, everywhere.",
        ],
        rules: [
            "You can choose what type of ball you start as. Once in each scenario, you can, at any time transform into a marble, a bowling ball, a a tennis ball, or anything else that could reasonably be termed a ‘ball’. ",
            "You can propel yourself around the ground, bounce yourself, and throw yourself as far and as hard as a normal person could throw a ball of your size and type.  ",
        ],
        items: [
            "Ball",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "WARNING: DO NOT READ THIS ALOUD: Traitor",
        paragraphs: [
            "Your goal is to remain trapped in this nightmare forever. But your stupid party seems determined to venture forward. Tell your party you are some type of Indestructable (i.e, superhero, robot, metal man) undead (ghost, vampire, mummy) or otherwise immortal character.  ",
        ],
        rules: [
            "In each room, you must try to fail to exit the room.  ",
            "If you succede in failing to exit the room, your character does not die.  ",
            "If you succede in exiting the room, reveal your true nature. Your character dies at the hands of the group. ",
            "Indestructable.  No matter how badly you mess up, you cannot die. Failed plans do not cause you die horribly. You have no other special abilities.  ",
        ],
        items: [
            "Knife",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Wonderdog.",
        paragraphs: [
            "You are a dog (your choice of breed). ",
            "You are smart, endearing, and athletic. ",
        ],
        rules: [
            "You have a sense of smell unrivaled in the human world. ",
            "You can communicate very simple ideas to others, getting people to follow you, growling, barking at danger.",
            " You cannot convey complex ideas, mime, or otherwise communicate ideas more complicated than a dog could.  ",
        ],
        items: [
            "Collar",
            "Buried bone",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Mutant",
        paragraphs: [
            "You rapidly mutate to get out of trouble. Like with real evolution, your mutations don't show much foresight.",
        ],
        rules: [
            " In each scenario, you mutate the first thing adventageous appendage you  or someone else suggests that would help you solve the puzzle. For example, a scenario involving extreme cold could have you grow a yeti cloak. ",
            "Your mutations accumaulte over time, however, and why helped you in one room, could make a later room almost impossible.  ",
        ],
        items: [
            "Government issued card that reads 'I'm a Human'.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Historical Figure (Your choice)",
        paragraphs: [
            "Your name has already gone down in the history books. How you’ve wound up alive and here is anyone's guess",
        ],
        rules: [
            "You have all the abilities, weaknesses, and personality quirks you had in life.",
            "You have all of the aliances and enemies you had in life.",
        ],
        items: [
            "You have all the personal posessions you had in life.  ",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Transformobot",
        paragraphs: [
            "You transform between the first item someone in the group mentions after drawing this character, and... a robot that looks a lot like that item, and has a personality matching that item. ",
        ],
        rules: [
            "You fire a projectile weapon, that has an effect similar to that item (i.e, a matchbox bot will have a flamethrower. A cellphone bot will... take... pictures? Bottom line, matches are cooler than cellphones.)",
            "You have a tendency towards puns relating to your item form.",
        ],
        items: [
            "You can be used as the item you transform into by other group members. You do not require ammunition, electricity, fuel, etc.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Wizard",
        paragraphs: [
            "While physically frail, you have mastered a small selection of arcane abilities.",
        ],
        rules: [
            "In each scenario, you can cast a single spell. ",
            "Illusion - you summon a hologram, sound, or other visual or auditory appirition.",
            "Telekinesis - you can move a single item up to your weight, a distance up to 200m.",
            "Polymorph - you can turn anything into any other thing, of similar size, weight, and complexity.",
            "Fireball - Boom!",
            "Raise Dead - You raise one creature from the dead. You can either return them full to normal independant life, or raise them as a mindless, shambling, servant.",
            "Forcefield - An impenetrable field of energy surrounds you. The bubble remains, immobile, for up to one hour.",
        ],
        items: [
            "Spell book",
            "Robe",
            "Wizard hat",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Womble",
        paragraphs: [
            "You have a bag that can fit an unlimmited amount of objects, and a compulsion to fill it with anything that might be useful.",
        ],
        rules: [
            "You may steal a single object or creature from each scenario to put in your bag. This may happen in each scenario, whether you are leader or not. ",
            "When you are leader, you may pull something or someone from the bag. They will help you to the best of their ability, after which they will leave or disappear.  ",
        ],
        items: [
            "Magic bag",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Pyromaniac",
        paragraphs: [
            "Fire is your best and oldest friend. You get so lonely when he's not around. In fact, you want to try and find him right now.",
        ],
        rules: [
            "If given enough time and the proper fuel, you can burn anything that can in theory combust.",
            "You know fire very well, and are likely to accurately predict how it will move and spread.",
            "You must set a fire in every room.",
        ],
        items: [
            "You always have some type of fire starter on you.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Circus Performer",
        paragraphs: [
            "You are a circus performer (your choice) such as an acrobat, animal tamer, knife thrower  magician, or clown.p",
        ],
        rules: [
            "Whatever you are, you are an expert at your craft. If you are an acrobat, you are amazingly nimble. If you are an animal tamer, animals follow you without complaint. A knife thrower would be remarkably accurate, and a magician can perform flawless slight of hand. ",
            "And a clown? Absolutely terrifying.",
        ],
        items: [
            "The expected equipment and costume of your profession.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Were-Something",
        paragraphs: [
            "You were bitten by some type of cursed or radioactive animal (your choice).  ",
        ],
        rules: [
            "You can transform into a half human, half animal creature.",
            "You gain the abilities, traits, and weaknesses of that creature.",
            "If you bite another creature, they will become a were-something as well. They may or may not appreciate this.",
        ],
        items: [
            "None",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Sentient Swarm",
        paragraphs: [
            "You're not one just one creature. You're dozens, or hundreds. Rats, crabs, spiders, or whatever other small, non-flying animal you choose.",
        ],
        rules: [
            "Your many small bodies work together with extreme cooperation and coordination.",
            "You can pass through small gaps.",
            "You can split up, but if any part of you gets more than 10m from the center of mass, it will lose communication with the swarm, and go back to being a normal animal.",
        ],
        items: [
            "None, or, hundreds of tiny collars, outfits, or other such identifying uniforms.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Author",
        paragraphs: [
            "You are writing the story of the room even as you are in it. You can hear the words from on high, even as you write them. ",
        ],
        rules: [
            "In each scenario, you two sentences in your book. The first recaps what happene since the last time you were leader. The second sentence is what will happen in the future. That sentence will occur, as written. The passage cannot end with a phrase along the lines of 'and I won the scenario'.",
            "Everything before or after that passage is at the discretion of the DM.",
            "You otherwise resolve conflicts as normal.",
        ],
        items: [
            "Book",
            "Pen",
            "Hip-flask",
        ]
    }
};
characterCards.push(character);


characterCards.push(character000);
characterCards.push(character001);
characterCards.push(character002);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);
characterCards.push(character003);


export default buildDeck('characters', characterCards);