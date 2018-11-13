import { buildDeck } from '../deck-building.js';

const characterCards = [];
let character;

let capCard = {
    data: {
        title: "Character Deck",
        type: "CapCard",
    }
}

// Character Template
/*
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
*/

character = {
    data: {
        title: "Ghost",
        paragraphs: [
            "You’re dead, but not departed. Your spectral form persists in this world, dripping ectoplasm everywhere. ",
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

character = {
    data: {
        title: "AI",
        paragraphs: [
            "You are an artificial intelligence, housed in a device carried or worn by one of the other group members.",
        ],
        rules: [
            "You are super intelligent, knowing everything on the internet and able to decipher any code or mathematical equation.",
            "You can hack into and take control of any electronic device that you can communicate with wirelessly or be plugged into.  ",
            "In each scenario, you further your plan to take over the world.",
        ],
        items: [
            "You are a small device with speech, wireless, and wired input/output.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Three children or small people in a trenchcoat",
        paragraphs: [
            "You started off doing this for a joke, but... you're in too deep now.p",
        ],
        rules: [
            "You are three people, sitting on each other's shoulders, in a long trenchcoat.",
            "You can seperate, provided no one sees parts of you sneak off or come apart",
            "You are incredibly convincing.",  
            "No one must ever know you are not a real proper adult person.",      ],
        items: [
            "Trenchcoat",
            "Fake beard",
            "Chewing gum/Cigarettes",
            "Slingshot/Pepper spray",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Jinxed/Cursed",
        paragraphs: [
            "Maybe you've been cursed by a witch. Or maybe you shouldn't have taken that summer job sitting under a lader breaking mirrors with a black cat. Either way, you are well and truely jinxed, with things going wrong around you.",
        ],
        rules: [
            "People around you will suffer spontaneous, terrible misfortune. You have an inkling what this might be, and can incorporate your suspicions in your plans. ",
            "You will suffer some terrible misfortune as part of each your plans. The DM or a group member will suggest this while you are making your plan, and you must accomodate it.",
        ],
        items: [
            "Broken mirror",
            "Black cat",
            "Monkey paw",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Soldier",
        paragraphs: [
            "Unlike these rookies, you are a professional at resolving conflicts.",
        ],
        rules: [
            "You are a trained combatant",
            "You are in excellent physical shape",
            "You can call in artillery strikes",
            "You are bound by the rules of the Geneva convention ",
        ],
        items: [
            "Firearm",
            "Grenades",
            "Combat Knife",
            "Night vision goggles",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Spy",
        paragraphs: [
            "Debaunair and dangerous, you are a master of disguise, but licensed to kill.  ",
        ],
        rules: [
            "You are excellent at disguises and impersonation",
            "You have a number of gadgets, disguised as innocuous items",
            "You must make a pun before killing any adversary",
        ],
        items: [
            "Chewing Gum C4 + ballpoint pen detonator",
            "Pistol",
            "Watch garotte",
            "Tuxedo or Ballgown",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "God of (Item)",
        paragraphs: [
            "You are the god of something, suggested by a Group member.",
        ],
        rules: [
            "You can summon the item from thin air.",
            "You can banish existing examples of the item.",
            "You can change any one property of an example of the item, such as color, size, or material.",
        ],
        items: [
            "An Item",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Dragon",
        paragraphs: [
            "Scaley, flying, fire breathing. A dragon.",
        ],
        rules: [
            "You have armoured scales.",
            "You can fly.",
            "You can breath fire.",
            "You must aquire any and all gold, jewelery, or anything else that could be termed 'treasure' from any scenario.",
        ],
        items: [
            "One treasure horde, enchanted to follow you from scenario to scenario.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Amorphous Entity",
        paragraphs: [
            "Given life by magic or science, you are a sentient, ocassionally humanoid blob of... stuff.",
        ],
        rules: [
            "You are made of a highly viscous substance of your choice, like honey, mercury, or glue.",
            "You can hold your gloop in humanoid form, collapse into a puddle, or protrude simple implements.",
            "You have the properties of your substance (i.e, nutritious, sweet, sticky honey), for better or worse.",
        ],
        items: [
            "Jar",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Lizard Person",
        paragraphs: [
            "You are a member of an ancient, secret cabal of reptilian humanoids. Wearing a mask to pass as human, your kind secretly controls all major affairs",
        ],
        rules: [
            "If you barely fail a scenario, it turns out that someone in the scenario is secretely on your side. You may attempt a second conflict resolution.",
            "In each scenario, you must secretly further your global conspiracy.",
        ],
        items: [
            "Financial resources of the American Federal Reserve",
            "Human mask",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Career Criminal",
        paragraphs: [
            "High risk, high reward, your life of crime has prepared you well for the scenarios.",
        ],
        rules: [
            "You are skilled with a lockpick.",
            "You can quickly identify a way into a premises.",
            "You must steal something from every scenario.",
        ],
        items: [
            "Kosh",
            "Pistol",
            "Mask",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Slasher",
        paragraphs: [
            "There's nothing you love more than donning a mask, going out to a rustic cabin, and getting some practice for your stabbing arm.",
        ],
        rules: [
            "You move silently.",
            "You can survive large injuries, and fake your death convincingly.",
            "Your victim's decision making abilities are markedly impaired in your presence.",
        ],
        items: [
            "Large rusty weapon",
            "Mask",
            "Torn, stained clothes",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Artificer",
        paragraphs: [
            "You have a knack for constructing elaborate, if temperamental, mechanisms of clockwork and artistry.",
        ],
        rules: [
            "You can construct gadgets.",
            "Gadgets are clockwork robots or devices that can carry out a specific purpose. ",
            "You must describe their appearance and manner of functioning.",
        ],
        items: [
            "Collection of gears, springs, levers, and struts",
            "Collection of sensors, and single minded clockworth thinking devices",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Master Archer",
        paragraphs: [
            "You can shoot the wings off a fly at a hundred paces.",
        ],
        rules: [
            "You can richochet your arrows off hard objects.",
            "You can fire 3 arrows a second.",
        ],
        items: [
            "Bow",
            "Arrows",
            "Flaming arrow",
            "Rope arrow",
            "Poison arrow",
            "Cupid's arrow",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Adventurer",
        paragraphs: [
            "You are a professional adventurer. Jack of all trades, Master of adventure.",
        ],
        rules: [
            "You are excellent at detecting traps.",
            "You are a silled combatant.",
            "As your sole defining characterestic is a penchant for adventure, your plans are always at least 'In Character'.",
        ],
        items: [
            "Rope",
            "Torch",
            "Flint",
            "Sword",
            "10 foot poll",
            "Map",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Caveman",
        paragraphs: [
            "Thawed out after 30,000 years, this world is strange and confusing. Snap frozen alongside the dinosaur you were fighting/hunting, the two of you have formed an uneasy alliance against this peculiar future.",
        ],
        rules: [
            "You can only communicate your intentions with grunts and mime.",
            "You are a skilled Hunter, forager, and survivor.",
            "You frequently mistake modern technology as magical or threatening in some way.",
        ],
        items: [
            "Club",
            "Monobrow",
            "Historically inaccurate pet dinosaur",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Cryptid",
        paragraphs: [
            "You are a possibly mythical creature, subject to endless rumours and conspiracy theories. Eg. Bigfoot, Loch Ness Monster, New Zealand moose.",
        ],
        rules: [
            "You have the abilities rumoured to belong to your cryptid.",
            "At most one non-Group character per scenario is capable of seeing you. They are incapable of convincing other characters of your existence.",
        ],
        items: [
            "None",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Psychic",
        paragraphs: [
            "You're a psychic. A real, proper, authentic psychic. For some reason, you have great difficulty convincing others of this fact.",
        ],
        rules: [
            "You can speak with the dead. Unfortunately, they are profoundly vague.",
            "You can predict the future with 100% accuracy, but your predictions are profoundly vague.",
            "You can perform magic, provided you are not observed doing it.",
        ],
        items: [
            "Crystal Ball",
            "Tarrot Cards",
            "Bent spoon",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Scientist",
        paragraphs: [
            "You've devoted your life to study, theory, and experimentation, and that wont stop just because your current predicament is entirely inexplicable.",
        ],
        rules: [
            "You must make a theory about the strange events behind each scenario. Present your theory to everyone, and they will vote on it's plausability. DM gets two votes. If the motion passes by a majority, it is correct.",
        ],
        items: [
            "Lab coat",
            "Slide rule",
            "Textbooks",
            "Pocket protector",
            "Bubbling flask",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Supersuit",
        paragraphs: [
            "You are a sentient super suit or robotic armor, charged with keeping the person weaing you alive and well.",
            "Your passenger or pilot is an imbecile (played, fittingly, by a different member of the group every scenario).",
        ],
        rules: [
            "You must obey the instructions of your wearer to the letter, although not to the spirit.",
            "You must not let the character wearing you die.",
            "You have super speed, strength, and resilience, although your pilot refuses to wear the helmet.",
        ],
        items: [
            "You are a supersuit",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Animate Statue",
        paragraphs: [
            "You are statue of (your choice), made of sentient rock. You move at geologic speed, while living creatures zip around too fast to see.",
        ],
        rules: [
            "Inanimate objects will answer questions to the best of their knowledge.",
            "Animate objects will obey your instructions, but very slowly.",
            "You cannot pecieve animals, who are not standing still for over an hour, and they don't perceive you as alive or moving.",
        ],
        items: [
            "Bird (on shoulder)",
            "Fountain",
            "Plaque",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Gambler",
        paragraphs: [
            "You are the consumate gambler. You know when to hold them, when to fold them, and when to run like hell.",
        ],
        rules: [
            "You must gamble in every scenario.",
            "Other entities will accept your bets if they appear to be fair or in their favour.",
            "You can attempt to cheat",
        ],
        items: [
            "Dice",
            "Deck of Cards",
            "Coin",
            "Poker chips",
            "Visor",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Mime",
        paragraphs: [
            "You cannot speak. It's annoying, but not as much as the invisible boxes, staircases, and rowboats that seem to litter the environment around you.",
        ],
        rules: [
            "You cannot speak when you are the Leader. You must mime your intentions with charades. The consensus if the room is what you do.",
            "You have a large collection of invisible but very real object, the usage of which you must mime.",
        ],
        items: [
            "White make-up",
            "Stripy outfit",
            "Many and varied invisible objects",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Revolutionary",
        paragraphs: [
            "Power to the people! Down with the man. You are an idealistic, charasmatic champion of the people.",
        ],
        rules: [
            "You are very persuasive in recruiting characters to your cause, at which point they become followers.",
            "If you achieve 2 outstanding successes, your revolution is successful. You become an authority figure, justified in deploying your followers against any who oppose you.",
        ],
        items: [
            "Gun",
            "Motivational propaganda",
            "Shirt with your face on it",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Weather God",
        paragraphs: [
            "When you've sad, clouds gather, and lightning crashes with your wrath. On the flip side, your smile can literally brighten a day. Hot and cold snaps follow your enthusiasm or depression, and the winds themselves echo your gastrointestinal distress.",
        ],
        rules: [
            "You can control the weather, but your character must be in the corresponding mood to deploy those effects.",
        ],
        items: [
            "Umbrella",
            "Sunglasses",
            "Antacids",
            "Fan",
            "Glass rod",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Assassin",
        paragraphs: [
            "You kill people for money. Not out of malice, just because your career advisor said you should do what you're good at.",
        ],
        rules: [
            "You are very quiet, and can kill anyone you sneak up on.",
            "You become invisible in even weak shadows.",
            "After leaving an adversary's line of sight for 30 seconds, they will forget you exist",
        ],
        items: [
            "Sniper rifle",
            "Dagger",
            "Disguise kit",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Sports Prodigy",
        paragraphs: [
            "You are an unrivaled superstar in your sport of choice. Unfortunately, your obsession with the game has left you delusional about where the game ends and real life begins.",
        ],
        rules: [
            "You have superhuman abilities at your sport of choice.",
            "You must score a point/goal/etc in each scenario you attempt.",
        ],
        items: [
            "The regulation equipment for your chosen sport",
            "Orange (sliced in wedges)",
            "Trophy",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Atlantian",
        paragraphs: [
            "Walking around in your water filled landsuit, your sea man powers clearly pick you out as an A tier superherop",
        ],
        rules: [
            "You can breathe underwater.",
            "You cannot breath on land out side of your suit.",
            "You can communicate with, although not necessarily command aquatic animals.",
        ],
        items: [
            "Landsuit",
            "Trident",
            "Seaweed (stuck to foot)",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Space Hero",
        paragraphs: [
            "Zap, pow, bang! You're every bit the brash space Hero, from the top of your immaculatey quaffed hair to the soles of your dashing bright red onsey.",
        ],
        rules: [
            "Everything you do, you do with near suicidal confidence. You have at most 5 seconds to deliberate on any action.",
        ],
        items: [
            "Cracked Ray gun",
            "Robot pal",
            "Fishbowl helmet",
            "Jetpack with fuel that reads 'empty' but you're positive there's a few more drops in the tank.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Audience Surrogate",
        paragraphs: [
            "Compared to your exotic colleagues, you are utterly, painfully mundane. Nevertheless, everyone you meet seems convinced that you're special, important, and destined for greatness",
        ],
        rules: [
            "Ummm, you're very... courageous? Sure. Why not.",
        ],
        items: [
            "Epic destiny",
            "Macguffin",
            "Plot armor",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Elemental Fighter (Classic)",
        paragraphs: [
            "You were gifted a magical artefact that gave you control of an element from antiquity (Your choice of Earth, Air, Wind, Water, or Fire).",
        ],
        rules: [
            "You can create, dispel, project, or otherwise manipulate your element.",
        ],
        items: [
            "Magical item, the source of your power.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Elemental Fighter (Modern)",
        paragraphs: [
            "You were gifted a magical artefact that gave you control of an element from the periodic table (Your choice).",
        ],
        rules: [
            "You can create, dispel, project, or otherwise manipulate your element.",
        ],
        items: [
            "Magical item, the source of your power.",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Lawyer",
        paragraphs: [
            "The best of the best, your legal accumen is so good, that you can even argue against the DM, the judge, jury, and executioner of these scenarios",
        ],
        rules: [
            "I object! You may object to one thing the DM includes in the scenario, and it will be removed.",
            "Rather than regular conflict resolution, you will be judged by an audience of your peers. A vote will decide if your plan succeeds, with ties going to you.",
        ],
        items: [
            "Briefcase with Evidence",
            "Bombshell",
            "Whiskey",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Vampire",
        paragraphs: [
            "A haughty, deadly, yet alluring creature of the night, you feed on the blood of lesser mortals.",
        ],
        rules: [
            "You can turn into a bat",
            "You are vulnerable to sunlight, garlic, and a stake through the heart. You can otherwise not be harmed.",
            "You must attempt to drain the blood of on character every scenario."
        ],
        items: [
            "Cape",
            "Coffin",
            "Cane",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Talking Snake",
        paragraphs: [
            "You are a true classic of mythological villany. One of the greats.",
        ],
        rules: [
            "You are very convincing, provided your lies will harm the listener.",
            "Cursed to crawl on your belly.",
            "Poisonous bite.",
            "You can taste infrared.",
        ],
        items: [
            "Apple (partly eaten)",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Reanimator",
        paragraphs: [
            "Waste not want not, right? You've mastered the art of restoring life to the dead.",
            "It's alive... Alive! Kinda!",
        ],
        rules: [
            "When another Leader dies, you can elect to resurrect them as your minion. They retain the abilities they had in life, although they lack the spark of intelligence. This may or may not be a noticable change.",
            "Many characters will see your stitched up sidekick as an abomination."
        ],
        items: [
            "Bone saw",
            "Needle and thread",
            "Lightning rod",
            "Organ donor card",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Bodyguard",
        paragraphs: [
            "You are bound to the Group member you are protecting by duty, honor, or employment. You win by keeping them alive.",
        ],
        rules: [
            "Select another character to be your 'Charge'. You are tasked with protecting them.",
            "When you are a Leader, your objective is always 'Keep my charge alive'. If you fail, you die in the process of protecting your charge.",
            "When your charge is Leader, if they fail a conflict, you must make a plan to save them. On success, you both live. On failure, they die. Pick a new charge.",
        ],
        items: [
            "Earpiece",
            "Sidearm",
            "Bullet proof vest",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Evil Mastermind",
        paragraphs: [
            "Some of these scenarios look... familiar. Did you... did you have a hand in creating them? No matter how much you stroke your cat, the memory escapes you...",
        ],
        rules: [
            "You have set a devious trap in every room.",
            "You have loyal, expendible henchmen. They are borderline non-functional at problem solving, marksmanship, and situational awareness.",
        ],
        items: [
            "Cat",
            "Monicle",
            "Traps",
            "Expendible hench-persons",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Miner",
        paragraphs: [
            "You know tunnels, rock, and the process of introducing the former to the latter. And not much else.",
        ],
        rules: [
            "You are skilled at excavating holes and tunnels.",
            "In each scenario where you excavate, you must state what thing of value you expect to find, along with why or how you will locate it.",
        ],
        items: [
            "Pickaxe",
            "Dynamite",
            "Headlamp",
            "Canary + Cage",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Witch or Warlock",
        paragraphs: [
            "Hexes, curses, and headology are your stock and trade. Each scenario, you may cast one of the following spells",
        ],
        rules: [
            "Polymorph: you may turn a living being into a tiny creature, the size of a toad or rat or smaller.",
            "Charm: For the duration of the scenario, the creature will believe you are a good friend, with their best interests at heart",
            "Summon familiar: You summon a cat, monkey, eagle, or other similarly sized creature, which will follow your instructions for the duration of the scenario",
        ],
        items: [
            "Clock",
            "Flying broomstick",
            "Cauldren",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Paladin",
        paragraphs: [
            "You are an armoured knight, a crusader for all that is good and holy... From your own self righteous perspective, anyway.",
        ],
        rules: [
            "When you encounter a character or group, make a snap judgement about whether they are good or evil.",
            "You must protect the good, and smite the evil.",
        ],
        items: [
            "Armor",
            "Warhammer",
            "Shield",
            "Warhorse",
            "Holy Symbol",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Survivor",
        paragraphs: [
            "You're a blast from the past, an unbreakable bunker dweller. You spent the best part of your life underground, hiding from a disaster that may or may not have occurred.",
        ],
        rules: [
            "You are convinced that the world was destroyed by the real or imagined disaster that made you seek shelter underground.",
            "You have an endearing naivite that makes people like and trust you easily.",
            "On a failed conflict, you realize that your whole life has been a lie, and become psychotic. A second failed conflict will end your career.",
        ],
        items: [
            "Tinned food",
            "Magazines (well read)",
            "Pipe Rifle",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Anthropomorphic Personification",
        paragraphs: [
            "You are the living embodiment of some abstract concept or emotional. It's reflected deeply in your personality, appearance, and mannerisms.",
        ],
        rules: [
            "You can accentuate or diminish this trait in others.",
            "You have an affinity for objects and places that exemplify your trait.",
            "Your plans must manipulate or incorporate the trait.",
        ],
        items: [
            "Outfit",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Hunter of Monsters",
        paragraphs: [
            "If it lives, you'd like to kill it. Not for sport, no. That would be wasteful. You craft the materials from your kills into weapons, armor, and tools... In order to hunt monsters more efficiently.",
        ],
        rules: [
            "You can craft gear out of the carcasses of defeated foes that would put Gilligan's coconut radio to shame.",
        ],
        items: [
            "Simple Sword",
            "Plain Armor",
            "Basic Shield",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "RPG Hero",
        paragraphs: [
            "Here you are, just starting out on your adventure. How fortunate for you that it seems like the entire world is built to be challenging but not outright fatal to someone of your abilities! Is it just your imagination though, or are things getting progressively harder?",
        ],
        rules: [
            "The world seems to be laid out so that everything is about as hard as you could plausibly handle.",
            "Scenarios are easy when you begin (the DM should modify or describe them to be simpler) and get more difficult as you gain power (The DM should add or upgrade the challenges)",
            "Each scenario, you find an upgrade to one of your items (DM's choice). It must be appreciably superior to the one it replaces.",
        ],
        items: [
            "Simple Sword",
            "Plain Armor",
            "Basic Shield",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Rebel",
        paragraphs: [
            "You're a rebel. A wildcard. A loose cannon. You ain't about to follow no stinking rules.",
        ],
        rules: [
            "For each scenario, your objective is the opposite of the one stated.",
            "Where this would mean your inevitable death, you miraculously survive.",
        ],
        items: [
            "Leather jacket",
            "Cigarette",
            "Motorcycle",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Remote Controller",
        paragraphs: [
            "You are unwilling or unable to manipulate the larger world through conventional force of muscle, using technology to impose your will on your surroundings instead."
        ],
        rules: [
            "You cannot move beyond that which is required to control your items.",
            "You cannot ascend an incline greater than 30 degrees.",
        ],
        items: [
            "Electric wheelchair or scooter",
            "Voice synthesizer",
            "Drone",
            "Disability services card",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Swashbuckler",
        paragraphs: [
            "En guard! Have at you! Equally at home on land and at sea, you steal hearts as easily as you claim booty, with feats of bravery and daring do.",
        ],
        rules: [
            "You are an expert at parkour",
            "You are a skilled if reckless combatant",
            "You must challenge hostile characters to a duel",
        ],
        items: [
            "Rapier",
            "Flintlock pistol",
            "Eye mask",
        ]
    }
};
characterCards.push(character);

character = {
    data: {
        title: "Collaboration",
        paragraphs: [
            "Your character is made up after you draw this card. They are a collaboration between:",
            "You,",
            "The Current DM (or the starting DM, if this is the first round),",
            "And the Group",
        ],
        rules: [
            "(You decide one rule)",
            "(Current DM decides one)",
            "(Group decides one rule)",
        ],
        items: [
            "You choose one item",
            "Current DM chooses one item",
            "Group chooses one item",
        ]
    }
};
characterCards.push(character);

export default buildDeck('characters', characterCards, capCard);